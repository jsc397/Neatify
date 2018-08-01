module.exports = {
    index: (req, res) => {
                //query for your problems here and pass all the problems to the render, use 'find({})'

        res.render("problems/problems")
    }
    //create a show action/method here
}