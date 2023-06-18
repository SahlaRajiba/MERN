const express = require('express');
const app = new express()
const PORT = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sahlarajiba:sahla1@cluster0.3jwiy4u.mongodb.net/')
.then(()=>{console.log("Mongo connected succesfully")})
.catch((err)=>{console.log(err)})



app.listen(PORT,()=>{
    console.log('listening on port '+ PORT)
})


app.get('/',(req,res)=>{
    res.send('welcome')
})


app.get('/about',(req,res)=>{
    res.send('about')
})