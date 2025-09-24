const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const router = require('./routers/route')
const Mongobd= require("./mongoDB/maindb")
Mongobd.connect();
app.use(express.json())
app.use(cors())

app.get("/get",(req,res)=>{
    res.status(200).json("hello00")
})
app.use(router)

app.listen(8000,()=>{
    console.log("server is runing.....")
})