const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('../DB/connection');
const User = require('../model/userSchema');

router.get("/",(req,res)=>{
    res.send("You are connected from router.js")
})

router.post("/signup", async(req,res)=>{
    // console.log(req.body);
    // res.json({message : req.body})

    const {name, email, phone, password, cpassword} = req.body;

    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({ error : "Please fill the value properly"});
    }

    try{
        const userExist = await User.findOne({email : email});
        
        if(userExist){
            return res.status(422).json({ error : "Email already exist"});
        }else if(password != cpassword){
            return res.status(422).json({ error : "Password does not match"});
        } else{
            const user = new User({name, email, phone, password, cpassword});

            await user.save();
    
            res.status(201).json({ message : "User registered successfully"});
           
        }



        // .then((userExist) => {
        //     if(userExist){
        //         return res.status(422).json({ error : "Email already exist"});

        //     }

        //     const user = new User({name, email, phone, password, cpassword});

        //     user.save().then(() => {
        //         return res.status(201).json({ message : "User registered successfully"});
        //     }).catch((err) => res.status(500).json({ error : "Failed to registered"}));
            
        // })
    }
    catch(err) {
        console.log(err);
    };

})

router.post('/signin', async (req,res) => {
    // console.log(req.body);
    // res.json({message : "Success"})

   try{
        const {email, password} = req.body;

        if( !email || !password ){
            return res.status(400).json({ error : "Please fill the data"});
        } 

        const userLogin = await User.findOne({email : email})
        
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie('jwtoken', token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if(!isMatch){
                res.status(400).json({error: "Invalid Credentials"});
            }else{
                res.json({message : "User signin successfully"});
            }
        }else{
            res.status(400).json({error: "Invalid Credentials"});
        }
        // res.json({message : "User signin successfully"});
   }
   catch(err){
    console.log(err);
   }
})

module.exports = router;