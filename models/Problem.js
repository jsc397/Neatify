const mongoose = require("../db/connection")
const Schema = mongoose.Schema;

const Problem = new Schema({
    paragraph: String,
    solutions : [
        { type: Schema.Types.ObjectId,
            ref: "Solution"
        }
    ]

}) //testtesttesettesetgit

module.exports = mongoose.model("Problem", Problem);