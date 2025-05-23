// kabab case,camel case and pascel case
const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");



if(process.env.NODE_ENV === "development"){
    router.post("/create",async (req,res)=>{
        let owners = await ownerModel.find();
        if(owners.length > 0) {

            return res
            .status(503)
            .send("You don't have permission to create new owner.")
        }
        let {fullname,email,password} = req.body;
        let createdOwner = await ownerModel.create({
            fullname ,
            email  ,
            password  ,
        
        });
        res.status(201).send(createdOwner);
    }
)
}



router.get("/",(req,res)=>{
    res.send("hey it's working"); // response handler and error handler
})


module.exports = router