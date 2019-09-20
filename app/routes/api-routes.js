//require models for passport
const db = require("../../models");
const passport = require("../../config/passport-setup");

module.exports = (app) => {


    app.post("/api/login", passport.authenticate("local"), (req,res) => {

        res.json("/users");
    });


    app.post("/api/signup", (req,res) => {
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.passport
        }).then( () => {
            res.redirect(307, "/api/login");
        }).catch((err) => {
            console.log(err);
            res.json(err);
        });
    });


};