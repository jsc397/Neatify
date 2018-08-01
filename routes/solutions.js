const express = require('express')
const router = express.Router();
const solutionController = require("../controllers/solution.js");

router.get("/", solutionController.index)

module.exports = router