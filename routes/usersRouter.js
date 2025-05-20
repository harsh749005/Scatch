// kabab case,camel case and pascel case
const express = require("express");
const router = express.Router();
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
router.get("/", (req, res) => {
  res.send("hey it's working"); // response handler and error handler
});

router.post("/register", async (req, res) => {
  // http://localhost:3000/users/register for postman
  try {
    let { email, password, fullname } = req.body;
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.send(err.message);
        else {
          let user = await userModel.create({
            email,
            password:hash,
            fullname,
          });
          let token = jwt.sign({email,id:user._id},"helulu",{expiresIn:'1h'});
          res.cookie("token",token);
          res.send("User Created")
        }
      });
    });

    // res.send(user)
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;

// ek hai frontend pai aapne field fillup nahi kiya tabhi db us field ko
// fill up kar dega
// lekin agar aap ne backend pe field hi define nahi ki to
// server crash ho jaaye ga
