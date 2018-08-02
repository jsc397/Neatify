const Problem = require("../models/Problem")
module.exports = {
    index: (req, res) => {
                //query for your problems here and pass all the problems to the render, use 'find({})'
        Problem.find()
        .then(problem => {
            console.log("problem looks like this:")
            console.log(problem)
            let oneProblem = problem[0]
            console.log("one problem looks like")
            console.log(oneProblem)
            res.render("problems/problems", { oneProblem })
        })
        res.render("problems/problems")
    },
    create: (req,res) => {
        Problem.find()
        .then(problem => {
            console.log(problem)
            res.render("problems/problems", { problem })
        })
    }
    //create a show action/method here
}