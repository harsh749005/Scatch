const mongoose = require('mongoose');
const config = require("config");
const dbgr = require("debug")("development:mongoose");
mongoose
.connect(`${config.get("MONGODB_URI")}SCATCH`)
.then(()=>{
    dbgr("connected") // debugers
})
.catch((err)=>{
    dbgr(err);
})

module.exports = mongoose.connection;