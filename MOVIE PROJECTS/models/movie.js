const mongoose = require('mongoose')
const MovieSchema = new mongoose.Schema({
    title:String,
    genre:String,
    director:String,
   releaseYear:Number,
   description:String
},{
    timestamps:true,
    versionKey:false
})

const MovieModel = mongoose.model('MovieModels',MovieSchema)
module.exports = MovieModel