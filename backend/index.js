const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require("body-parser")
const router = require('../backend/routes/userroutes')
const cors = require('cors')

const app = express()
const port = 5000

app.use(cors())
app.use(bodyparser.json())

const url="mongodb+srv://palanirani1007:rani63853@cluster0.wycy8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose
 .connect(url)
 .then(()=>{
    console.log("db connected ")
 })
 .catch((err)=>{
    console.log ("error while connecting the database",err)
 })
 app.use('/',router)
 
app.listen(port,()=>{
    console.log("server running succesfully")
})