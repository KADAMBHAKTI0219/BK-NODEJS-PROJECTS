// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
});
const productModel = mongoose.model('Products', productSchema)

module.exports = productModel;
