const express = require('express');
const router = express.Router();
 
//Index page has all of the problems
router.get("/", indexController.index)


module.exports = router
