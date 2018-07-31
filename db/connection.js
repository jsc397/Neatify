// mongoose.connect('mongodb://localhost/db_name')
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/neatifydb")
mongoose.Promise = Promise
module.exports = mongoose