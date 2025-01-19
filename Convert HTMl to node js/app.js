const express = require('express')
const connectionToDB = require('./config/db')
const routers = require('./routes')
require('dotenv').config
const app = express()
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/htmlToNode',routers)


app.listen(process.env.PORT||3030,async()=>{
    try {
        await connectionToDB
        console.log(`server is running on port ${process.env.PORT||3030}`)
    } catch (error) {
        console.log(error)
    }
})