const express = require('express')
const router = express.Router();
const homepageController = require("../controllers/homepage.js");

//Homepage introduces the concept

router.get("/", homepageController.index)

module.exports = router

//fix spelling homepage