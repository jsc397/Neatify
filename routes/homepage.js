const express = require('express')
const router = express.Router();
const hompageController = require("../controllers/homepage.js");

//Homepage introduces the concept

router.get("/", hompageController.index)

module.exports = router