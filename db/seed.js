const User = require("../models/User")
const { Solution } = require("../models/Solution")
const seedData = require("./seeds.json")

User.remove({})
    .then( () => {
        return User.collection.insert(seedData)
    })
    .then (() => {
        process.exit()
    })