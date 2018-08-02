const express = require('express')
const router = express.Router();
const solutionController = require("../controllers/solution.js");

// router.post("/", solutionController.create);
router.get("/new", solutionController.new);
// router.get("/:id", solutionController.show);
// router.put("/:id", solutionController.update);

module.exports = router