// kabab case,camel case and pascel case
const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hey it's working"); // response handler and error handler
})

module.exports = router