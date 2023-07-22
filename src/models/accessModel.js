const mongoose = require("mongoose")

const acessoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String
        }
    },
    {
        versionKey: false
    }
)

const acesso = mongoose.model("acesso", acessoSchema)

module.exports = acesso