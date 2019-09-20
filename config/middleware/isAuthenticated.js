// middleware to restrict routes user can take if not logged in

module.exports = (req, res, next) => {
    // so if the user is logged in, continue with the request to the restricted route
    if (req.user) {
        return next();
    }

    // user not logged in, redirect them to the login page
    return res.redirect("/");
}