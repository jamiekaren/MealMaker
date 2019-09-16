const router = require('express').Router();
const passport = require('passport');


// auth login

router.get('/login', (req, res) => {
    res.render("login");

});


// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send("Logging out");
});


// auth with google, 1st paramter starts strategy, 2nd paramter is "scope"
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to after authorizing with API/Profile, 
// created this CB redirect URI in API dev console
// Google gives us a special code for our user, which we can use to get profile info

// add our passport "middleware" to fire before, now that we have our code
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('you reached the callback uri ');
});


// our local username and password routes
// let's set a flash message if it fails to let the user know (but we need req.flash() ??)
router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login/local', failureFlash: true }),
    (req, res) => {
        //'req.user' contains the authenticated user
        res.redirect('/users/' + req.user.username);
    });



module.exports = router;