const express = require('express')
const router = express.Router();
const problemsController = require("../controllers/problems.js");

//Problems route goes to problems controllers to populate all the problems
router.get("/", problemsController.index)
//Need to be able to see one problem to input the solution and populate a show page
router.get("/:id", problemsController.show)
//

module.exports = router