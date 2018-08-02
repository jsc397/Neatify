// mongoose.connect('mongodb://localhost/db_name')
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/neatifydb", { useNewUrlParser: true }) //neatigydb is my database name
mongoose.Promise = Promise
module.exports = mongoose