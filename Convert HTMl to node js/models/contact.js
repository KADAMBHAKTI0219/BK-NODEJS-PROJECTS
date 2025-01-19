const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    message:String
})

const contactModel = mongoose.model('Contacts',contactSchema)
module.exports = contactModel