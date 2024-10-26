const mongoose = require('mongoose')
const connectionToDb= mongoose.connect('mongodb://127.0.0.1:27017/books')
module.exports=connectionToDb