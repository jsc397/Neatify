// const User = require("../models/User");
const { Problem } = require("../models/Problem");
// const bcrypt = require("bcrypt-nodejs");

// const createPassword = password =>
//     bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

Problem.find({}).remove(() => {
    let problem1 = Problem.create({
        paragraph: "wrongwrongwrongwrong"
    }).then(problems => {
        problems.push(problem1);
    })
})