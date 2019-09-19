const path = require("path");
const isAuthenticated = require("../../config/middleware/isAuthenticated");


module.exports = function (app) {
    app.get("/", function (req, res) {
        if (req.user) {
            res.direct("/users");
        }
        res.se
        res.sendFile(path.join(__dirname, "../../public/home.html"));
    });

    app.get("/login", function (req, res) {
        if (req.user) {
            res.redirect("/users");
        }
        res.sendFile(path.join(__dirname, "../../public/home.html"));
    });

    app.get("/favorites", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/favorites.html"));
    });

    app.get("/recipes", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/recipes.html"));
    });

    app.get("/users", isAuthenticated, function (req,res){
        res.sendFile(path.join(__dirname, "../../public/users.html"));
    })  



};