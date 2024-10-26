const express = require('express')
const connectionToDb = require('./db')
const userRouter = require('./Routes/bookRoutes')
const cors =require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/bookStore',userRouter)

 app.listen(3001,async()=>{
   try {
    await connectionToDb
    console.log('server is running on port 3001')
   } catch (error) {
        console.log(error)
   }
 })