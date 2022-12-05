const express = require('express');
const app = express();
const data1 = require("./Routes/bollywood")
const cors = require("cors")

require('./DB/connection')
const User = require('./model/userSchema')

const router = require('./routerr/auth')

app.use(cors());

app.use(express.json()) // application understands the data(in the form of json which app doesnot understand) 

app.use('/',router)

app.use("/home", data1)
console.log(data1);

// app.get("/",(req,res)=>{
//     res.send("You are connected")
// })

app.get("/contact",(req,res)=>{
    // res.cookie('test', 'oktoken');
    res.send("You are connected to Contact page")
})

// app.listen(5000,()=>{
//     console.log("server running");
// })

app.listen(process.env.PORT||8080,()=>{
    console.log("server running");
})