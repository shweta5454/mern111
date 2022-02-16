// 1)importing packages
const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const route=require('./controller')

const mongoose=require('mongoose');

//2)creating server
app=express();



// mongoose.connect(mongoServer,()=>{
// console.log("Mongodb connected")},


// 3)using middleware
app.use(cors());
app.use(bodyParser.json());

//middleware Routes
app.use('/user',);

// 5)listening to server
app.listen(process.env.PORT||8080,()=>{
    console.log("server started at port number:8080");
});