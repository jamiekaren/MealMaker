const router = require('express').Router();
const passport = require('../../config/passport-setup');
//require our user passport model
const db = require("../../models/user-model");


//Using passport.authenticate middleware with our local strategy
//If the user has valid login, send them to the users page
//OTherwise the user will be sent an error
router.post("/login", passport.authenticate("local"), (req, res) => {
    // we're sending the user back the route to the members page because the redirect will happen there
    res.json("/users");
});



//route for signing up a user
//password is automatically hashed and store securely
//This uses our Sequelize User Model
router.post("/register", (req, res) => {
    console.log(req.body);
});

//route for logging out a user
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

// Route for getting some data about our user to be used client side??
app.get("/user_data", function (req, res) {
    if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
    }
    else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    }
});






module.exports = router;