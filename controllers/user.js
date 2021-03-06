const User = require("../models/User");
const { Solution } = require("../models/Solution");
// const passport = require("passport");

module.exports = {
    show: (req, res) => {
        User.findOne({ _id: req.params.id })
            .populate({ 
              path: "solutions", 
              options: { limit: 10, sort: { createdAt: -1 } }
            })
            .then(user => {
                res.render("user/show", { user });
            });
    },
    new: (req, res) => {

    },
    
    // login: (req, res) => {
    //     res.render("user/login", {
    //         message: req.flash("signupMessage")
    //     });
    // },
    // createLogin: (req, res) => {
    //     const login = passport.authenticate("local-login", {
    //         successRedirect: "/",
    //         failureRedirect: "/user/sign-up",
    //         failureFlash: true
    //     });

    //     return login(req, res);
    // },
    // signUp: (req, res) => {
    //     res.render("user/signup", {
    //         message: req.flash("signupMessage")
    //     });
    // },
    // createSignUp: (req, res) => {
    //     const signup = passport.authenticate("local-signup", {
    //         successRedirect: "/",
    //         failureRedirect: "/signup",
    //         failureFlash: true
    //     });

    //     return signup(req, res);
    // },
    // logout: (req, res) => {
    //     req.logout();
    //     res.redirect("/");
    // }
};
