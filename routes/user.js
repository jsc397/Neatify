const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.js");

// Users should be able to :

// User needs to login, get the login form
router.get("/login", userController.login);

//Create new login
router.post("/login", userController.createLogin);

//Get new user signup page
router.get("/sign-up", userController.createSignup);

//Create the new signup user
router.post("/sign-up", userController.CreateSignUp);

//Logout of the app
router.get('/logout', userController.logout);

//Show 1 user id
router.get('/:id', userController.show)

module.exports = router 