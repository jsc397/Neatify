const mongoose = require("../db/connection")
const Schema = mongoose.Schema;

const User = new mongoose.Schema ({
//model info:
// Username = "string"
// reference Solutions model with ref: Solutions
})

module.exports = mongoose.model("User", User)