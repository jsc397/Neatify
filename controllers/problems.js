const Problems = require("../models/Problem")
module.exports = {
    index: (req, res) => {
                //query for your problems here and pass all the problems to the render, use 'find({})'
        // Problems.find()
        // .then(problem => {
        //     console.log(problem)
        //     res.render("problems/problems", { problem })
        // })
        res.render("problems/problems")
    },
    create: (req,res) => {
        Problems.find()
        .then(problem => {
            console.log(problem)
            res.render("problems/problems", { problem })
        })
    }
    //create a show action/method here
}