const express = require('express');
const router = express.Router();
 
router.get("/", controller.index)
router.get("/user",Usercontroller.index)
router.get("/solution",SolutionController.index)

module.exports = router