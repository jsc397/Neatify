const express = require ('express')
const hbs = require('hbs')
const bodyParser = require("body-parser")
const methodOverride = require("method-override")

const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "hbs")

app.use(require('./routes/index.js'))
app.use(require('./routes/homepage.js'))

app.listen(4000, () => console.log ("Locked and loaded on port 4000!"))