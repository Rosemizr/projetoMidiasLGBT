const acessoModel = require("../models/accessModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const create = (req, res) =>{
    const hashPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashPassword

    const access = new acessoModel(req.body)
    access.save(function(err){
        if(err){
            res.status(500).send({
                message: err.message
            })
        }
        res.status(201).send(access.toJSON())
    })
}

const getAll = (req, res) =>{
    acessoModel.find(function(err, access){
        if(err){
            res.status(500).send({
                message: err.message
            })
        }
        res.status(200).send({access})
    })
}

const deleteById = async (req, res) =>{
    try {
        const { id } = req.params
        await acessoModel.findByIdAndDelete(id)
        const message = `User with ${id} has been deleted successfully`
        res.status(200).json({
            message, acessoModel
        })
    } catch (error) {
        console.error(error)
        res.status(404).send({
            message: error.message
        })
    }
}

const login = async (req, res) =>{
        acessoModel.findOne({email: req.body.email}, function(err, access){
            if(!access){
                return res.status(404).send(`User with email ${req.body.email} was not found`)
            }
            const validPassword = bcrypt.compareSync(req.body.password, access.password)

            if(!validPassword){
                return res.status(403).send(`Invalid password`)
            }

            const token = jwt.sign({email: req.body.email}, SECRET)
            return res.status(200).send(token)
        })   
}

module.exports = {
    create,
    getAll,
    deleteById,
    login
}