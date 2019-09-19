const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20');
const LocalStrategy = require('passport-local').Strategy;
//We will need the models to check passport gainst
const db = require("../models")

// require('dotenv').config();


//This tells passport we want to use a Local Strategy (ie username/email & password)
passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    (email, password, done) => {
        // when the user tries to sign in run this code
        db.User.findOne({
            where: {
                email: email
            }
        }).then((user) => {
            if (!user) {
                return done(null, false, {
                    message: "Incorrect email"
                });
            }
            else if (!user.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            return done(null, user);
        });
    }
));


// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
    cb(null, user);
});
//
passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});


// Exporting our configured passport
module.exports = passport;



// passport.use(
//     new GoogleStrategy({
//         // we are using the google API behind the scenes
//         callbackURL: '/auth/google/redirect',
//         clientID: process.env.googleClientID,
//         clientSecret: process.env.googleClientSecret
//         // passport callback function
//         //this takes in 4 parameters
//     }, (accessToken, refreshToken, profile, done) => {
//         //let's look at the profile for now
//         console.log(profile);
//     })
// );