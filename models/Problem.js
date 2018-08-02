const mongoose = require("../db/connection")
const Schema = mongoose.Schema;

const Problem = new Schema({
    paragraph: String,
    solutions : [
        {
            type: Schema.Types.ObjectId,
            ref: "Solution"
        }
    ]

})

module.exports = {
        Problem: mongoose.model("Problem", Problem),
};