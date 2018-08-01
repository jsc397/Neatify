const mongoose = require("../db/connection")
const Schema = mongoose.Schema;

const User = new mongoose.Schema ({
    local: {
        email: String,
        password: String
    }
    },
    solution: [
        {type: Schema.Types.ObjectId,
        ref: "Solution"}
    ]
});

module.exports = mongoose.model("User", User)