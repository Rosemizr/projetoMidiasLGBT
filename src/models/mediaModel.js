
const mongoose = require("mongoose")

const mediaSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
        director: {
            type: String,
            required: true,
        },
        releaseDate: {
            type: Number,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        available:{
          type: Boolean,
          required: true,
        },
        description:{
            type: String,
            required: true,
        },
        rating:{
            type: Number,
            required: true,
        },
        type:{
            type: String,
            required: true
        }
    },
    { timestamp: true }
)

const Model = mongoose.model("media", mediaSchema)

module.exports = Model