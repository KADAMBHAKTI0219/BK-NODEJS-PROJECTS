const mongoose = require("mongoose");
// schema
const userSchema = new mongoose.Schema({
    Title: String,
    Author: String,
    Price: Number,
    Image:String,
    Description :String,
    ISBN: String
});

const userModel = mongoose.model('bookdata', userSchema);

module.exports = userModel;
