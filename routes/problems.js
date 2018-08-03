const express = require('express')
const router = express.Router();
const problemsController = require("../controllers/problems.js");

//get a list of problems from the db
router.get("/", problemsController.index)

//show 1 problem from the db
router.get("/:id", problemsController.show)


module.exports = router