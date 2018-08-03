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

app.use(require('./routes/index.js'))

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
