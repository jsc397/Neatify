const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.js");

// Users should be able to :

// User needs to login, get the login form
router.get("/new", userController.new);

//Create new login
router.post("/login", userController.createLogin);

//Logout of the app
router.get('/logout', userController.logout);

//Show 1 user id
router.get('/:id', userController.show)

module.exports = router 