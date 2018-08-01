const express = require('express')
const router = express.Router();
const problemsController = require("../controllers/problems.js");

//Problems route goes to problems controllers to problems to show the problems pages
router.get("/", problemsController.index)
// router.get("/:id", problemsController.show)

module.exports = router