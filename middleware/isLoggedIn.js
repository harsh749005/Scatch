const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");
module.exports.isLoggedIn = async function (req,res,next){

try{   
    
    if(!req.cookie.token) {
        req.flash("error","You need to login first");
        return res.direct('/');
    }
    let decoded = jwt.verify(req.cookie.token,process.env.JWT_KEY)
    let user = await userModel
    .findOne({email:decoded.email})
    .select("--password");

    req.user = user;
    next();
}catch(error){
    req.flash("error","something went wrong.");
    req.redirect("/");
}

}