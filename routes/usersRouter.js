// kabab case,camel case and pascel case
const express = require("express");
const router = express.Router();
const {registerUser} = require("../controllers/authController")
router.get("/", (req, res) => {
  res.send("hey it's working"); // response handler and error handler
});

router.post("/register",registerUser);

module.exports = router;

// ek hai frontend pai aapne field fillup nahi kiya tabhi db us field ko
// fill up kar dega
// lekin agar aap ne backend pe field hi define nahi ki to
// server crash ho jaaye ga
