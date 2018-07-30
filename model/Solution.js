const mongoose = require("../db/connection")
const Schema = mongoose.Schema;

const Solution = new Schema({
    content: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [Comment]
});

const Comment = new Schema({
    content: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [Comment]
});

module.exports = {
    Solution: mongoose.model("Solution", Solution),
    Comment: mongoose.model("Comment", Comment)
};
