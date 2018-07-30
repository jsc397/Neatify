const express = require ('express')
const hbs = require('hbs')
const bodyParser = require("body-parser")
const methodOverride = require("method-override")

const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "hbs")

app.use(require('./routes/index.js'))

app.listen(3000, () => console.log ("Locked and loaded on port 3000!"))