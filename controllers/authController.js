const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const {generateToken} = require("../utils/generateToken")

module.exports.registerUser =  (req, res) => {
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
          let token = generateToken(user);
          res.cookie("token",token);
          res.send("User Created")
        }
      });
    });

    // res.send(user)
  } catch (err) {
    console.log(err.message);
  }
}