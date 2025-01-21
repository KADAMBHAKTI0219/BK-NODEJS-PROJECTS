const express=require('express')
const { SignUp, SignIn } = require('../controllers/authController')
const UserRouter = express.Router()
UserRouter.post('/register',SignUp)
UserRouter.post('/login',SignIn)
module.exports = UserRouter