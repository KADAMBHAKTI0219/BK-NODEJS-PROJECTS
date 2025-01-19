const express = require('express')
const { Home, AboutUs, GetProductData } = require('../controllers/productController')
const Contact = require('../controllers/contactController')

const routers = express.Router()
routers.get("/home",Home)
routers.get('/about',AboutUs)
routers.post('/contact',Contact)
routers.get('/product',GetProductData)

module.exports = routers