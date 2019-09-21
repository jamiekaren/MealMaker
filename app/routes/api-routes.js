//require models for passport
const db = require("../../models");
const passport = require("../../config/passport-setup");

module.exports = (app) => {


    app.post("/api/login", passport.authenticate("local"), (req, res) => {

        res.json("/users");
    });

    app.post("/api/signup", (req, res) => {
        console.log(req.body);
        // create a new user in our database Users (imported from models)
        db.User.create({
            email: req.body.email,
            password: req.body.passport
        }).then(() => {

            //redirect to our login page
            res.redirect(307, "/api/login");
        }).catch((err) => {
            console.log(err);
            res.json(err);
        });
    });
};