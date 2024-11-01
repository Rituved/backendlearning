console.log("ppppp")
require('dotenv').config()
// first we will creact empty node application  =>npm init   / npm init -y  this means says yes to all and set default setting   which will give you return package.json
 
//scripts cammand we can create by onself some default scripts cammand are like dev , build  
// created by me "start": "node index.js"    in package.json
// me cammand chlaungi npm run start to node index.js  chlega this is more useful which deploy on the server
// npm install express  

const express = require('express')   //import express from "express"
 
const app = express()
const port = 3200
//get request  
// request means callback
app.get('/', (req, res) => { 
  res.send('Hello World! ritu')
})
// app do one thing where is / home route try to listen there
app.get('/loginpage',(req,res)=>{
  res.send("ritu is learning backend")
})
app.get('/new',(req,res)=>{
  res.send("<h1>creating new request on new year</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

//after complete server app now this is the time to deploy app for that go to  dotenv and install it then create a file with the name of .env and then port=3000

// for github set git ssh setup window