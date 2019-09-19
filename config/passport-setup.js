const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
// const keys = require('./keys');
require('dotenv').config();

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

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));