const express = require("express");
const connectionToDB = require("./config/db");
const UserRouter = require("./routes/userRoutes");
require('dotenv').config()
const app = express()
app.use('/auth',UserRouter)



app.listen(process.env.PORT || 3000,async()=>{
    try {
        await connectionToDB
        console.log(`Server is running on port ${process.env.PORT || 3000}`)
    } catch (error) {
        console.log(error + "Internal server error")
    }
    
})
