//require models for passport
const db = require("../../models");
const passport = require("../../config/passport-setup");

module.exports = (app) => {


    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.sendFile(path.join(__dirname, "../../public/user.html"));
    });

    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        //we get the console log of our email and password, why is it null?
        // should create a new user in our database Users (imported from models)
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(() => {
            //redirect to our login page
            res.redirect(307, "/login");
        }).catch((err) => {
            console.log(err);
            res.json(err);
        });
    });

    // Route for logging user out
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    app.get('/api/licensekey', (req, res) => {
        res.send(process.env.fullPageLicenseKey);
    });
};