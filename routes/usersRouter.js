// kabab case,camel case and pascel case
const express = require('express');
const router = express.Router();
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt")
router.get("/",(req,res)=>{
    res.send("hey it's working"); // response handler and error handler
})

router.post("/register",async (req,res)=>{
// http://localhost:3000/users/register for postman
    try{

        let {email,password,fullname} = req.body;
        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password,salt,(err,hash)=>{
                if (err) return res.send(err.message);
                else res.send(hash);
            })
        })

        let user = await userModel.create({
            fullname,email,password,
        })
        // res.send(user)
    } catch(err){
        console.log(err.message);
    }
    


})

module.exports = router

// ek hai frontend pai aapne field fillup nahi kiya tabhi db us field ko 
// fill up kar dega
// lekin agar aap ne backend pe field hi define nahi ki to 
// server crash ho jaaye ga