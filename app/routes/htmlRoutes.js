const path = require("path");


module.exports = function(app) {
app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/favorites", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/favorites.html"));
});

app.get("/recipes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recipes.html"));
});

};