const mongoose=require("mongoose");
const movieschema=new mongoose.Schema({
    Title:String,
    Genre:String,
    Director:String,
    ReleaseYear: Number,
    Description: String
})

const moviemodel=mongoose.model("MoviesData",movieschema)

module.exports=moviemodel