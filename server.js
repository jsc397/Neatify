const express = require ('express')
const hbs = require('hbs')
const bodyParser = require("body-parser")
const methodOverride = require("method-override")

const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "hbs")

app.use(express.static('public/images')) //make images folder to use this
app.use(express.static('public/css')) //link to css folder in public
app.use(require('./routes/homepage.js'))
app.use(require('./routes/problems.js'))


app.listen(4000, () => console.log ("Locked and loaded on port 4000!"))