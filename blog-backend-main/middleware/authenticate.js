const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

require('dotenv').config({path:"./config.env"})




const authenticate = async (req,res,next) =>{

   

        console.log("1"); 
       
        let token = req.headers.cookie;
        if(!token){
            return res.status(400).send( "Please login first");
        }
        console.log(token);

        token = token.replace("jwtoken=", "");
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        console.log("3");
        
        console.log(verifyToken)

        const admin_id = "639491a643a28bf7130267cc" ;
       
       
        
        const parentUser = await User.findOne({

            _id: verifyToken._id, 
            "tokens.token" : token
        })
        if(!parentUser){
            throw new Error("User not Found");
        }

    try{
        // req.token = token;
        // req.parentUser = parentUser;
        // req.userId = parentUser._id;

        if(verifyToken._id === admin_id){
            console.log("next() called");
            // res.redirect("/")
            next();
        }

       

    }
    catch(err){
        console.log("rejected here");
        res.status(401).send("Unauthorized: No token provided")
        console.log(err);
    }
}

module.exports = authenticate;