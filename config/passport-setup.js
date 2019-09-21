// import passport 
const passport = require("passport");
const LocalStrategy = require("passport-local");

// import models folder to check passport setup
const db = require("../models");

//tell passport what strategy to use
passport.use(new LocalStrategy(
    // user will sign in with email
    {
        usernameField: "email"
    },
    function(email, password, done) {
        // When a user tries to sign in this code runs
        db.User.findOne({
          where: {
            email: email
          }
        }).then(function(dbUser) {
          // If there's no user with the given email
          if (!dbUser) {
            return done(null, false, {
              message: "Incorrect email."
            });
          }
            // if there is a user with email but password is wrong
            else if (!dbUser.validPassword(password)){
                return done (null, false, {
                    message: "Incorrect password."
                });
            }
            // if none of the above, return the user
            return done (null, dbUser);
        });
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  //
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
  //
  // Exporting our configured passport
  module.exports = passport;