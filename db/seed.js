const User = require("../models/User");
const { Solution } = require("../models/Solution")
const { Problem } = require("../models/Problem");

Problem.find({}).remove(() => {
    Problem.create({
        paragraph: "If you have a sentence with an object in it -- basically a noun that receives the action -- passive voice can happen to you. Passive happens when the object of a sentence is put at the beginning of a sentence instead of at the end. With passive voice, your writing comes across as sounding weak and unclear."
    }).then(problems => {
        problems.push();
    }),
    Problem.create({
        paragraph: "THIS IS TEST NUMBER TWO"
    }).then(problems => {
        problems.push()
    }),
    Problem.create({
        paragraph: "This is another frikken test"
    }).then(problems => {
            problems.push()
    
    }).then(() => {
        problem.save(err => console.log(err))
    })
});

User.find({}).remove(() => {
    Solution.find({}).remove(() => {
        let benedict = User.create({
            local: {
                email: "benedictcumberbatch@gmail.com",
                password: "bestsherlockonearth"
            }
        }).then(user => {
        Promise.all([
           Solution.create({
            content: "this is benedicts solution",
            author: user._id,
            comments: [Comment]
           }).then(solution => {
             user.solution.push(solution)
           }) 
        ]).then(() => {
           user.save(err => console.log(err))
        })
    })
})
})