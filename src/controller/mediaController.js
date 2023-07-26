const midiasModel = require("../models/mediaModel")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const getAllMedia = async (req, res) =>{
    try {
       
        const allMedia = await midiasModel.find()
        res.status(200).json(allMedia)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const getById = async (req, res) =>{
    try {
       
        const findMedia = await midiasModel.findById(req.params.id)
        if(findMedia == null){
        res.status(404).send({message: "Media not available"})
        }
        res.status(200).json(findMedia)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getMediaByType = async (req, res) => {
    try {
        const type = req.query.type.toLowerCase();

        // Certifique-se de que o nome do campo corresponda à definição no modelo
        const findMedia = await midiasModel.find({ mediaType: type });

        if (findMedia.length === 0) {
            return res.status(404).send({ message: "Media not available" });
        }

        res.status(200).json(findMedia);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addNewMedia = async (req, res) =>{
    try {
        const authHeader = req.get("authorization")

        if(!authHeader){
            return res.status(404).send(`Enter authorization information`)
        }

        const token = authHeader.split(" ")[1]

        jwt.verify(token, SECRET, async function(error){
            if(error){
                return res.status(403).send(`Unauthorized access`)
            }
        })
        
        const {
            name,
            director,
            releaseDate,
            genre,
            available,
            description,
            rating,
            type,
        } = req.body
        const newMedia = new midiasModel({
            name,
            director,
            releaseDate,
            genre,
            available,
            description,
            rating,
            type,
        }) 
        const saveMedia = await newMedia.save()
        res.status(201).json({message: "New media added"})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateMediaById = async (req, res) =>{
    try {
        const authHeader = req.get("authorization")

        if(!authHeader){
            return res.status(404).send(`Enter authorization information`)
        }

        const token = authHeader.split(" ")[1]

        jwt.verify(token, SECRET, async function(error){
            if(error){
                return res.status(403).send(`Unauthorized access`)
            }
        })

        const {
            name,
            director,
            releaseDate,
            genre,
            available,
            description,
            rating,
            type,
        } = req.body
        const updateMedia = await midiasModel.findByIdAndUpdate(req.params.id, {
            name,
            director,
            releaseDate,
            genre,
            available,
            description,
            rating,
            type,
        }) 

        res.status(200).json({message: "Media successfully updated"})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteById = async (req, res) =>{
    try {
        const authHeader = req.get("authorization")

        if(!authHeader){
            return res.status(404).send(`Enter authorization information`)
        }

        const token = authHeader.split(" ")[1]

        jwt.verify(token, SECRET, async function(error){
            if(error){
                return res.status(403).send(`Unauthorized access`)
            }
        })

        const { id } = req.params
    const deleteMedia = await midiasModel.findByIdAndDelete(id)
    res.status(200).json({message: `Media with ID ${id} successfully deleted`})
    } catch (error) {
        res.status(404).json({message: "Media not found"})
    }
}

module.exports = {
    getAllMedia,
    getById,
    getMediaByType,
    addNewMedia,
    updateMediaById,
    deleteById
}