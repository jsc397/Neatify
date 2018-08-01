const mongoose = require("../db/connection")
const Schema = mongoose.Schema;

const Problem = new Schema({
    paragraph: String
})