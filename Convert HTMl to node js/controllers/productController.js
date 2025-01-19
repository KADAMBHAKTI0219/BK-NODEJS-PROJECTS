
const productModel = require("../models/product")

const Home = async(req,res)=>{
    res.send('Welcoming To HomePage')
}

const AboutUs = async(req,res)=>{
    res.send('About Page')
}

const GetProductData = async(req,res)=>{
    try {
        const productData = await productModel.find()
        res.json(productData)
    } catch (error) {
        res.send(error) 
    }

}

module.exports = {Home,AboutUs,GetProductData}