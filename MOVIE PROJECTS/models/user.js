const mongoose = require('mongoose')
const MovieUserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:'user'
    }
},{
    timestamps:true,
    versionKey:false
})

const MovieUserModel = mongoose.model('MovieUserModels',MovieUserSchema)
module.exports = MovieUserModel