const express = require("express");
const Sequelize = require("sequelize");
const path = require("path");
const fs = require("fs");
const router = require("router");
// import the models folder
const db = require("./models")

// sessions for passport
const session = require("express-session");
// Requiring passport as we've configured it 
const passport = require("./config/passport-setup");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8080;

// Body Parser
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));//Check to see if we need this folder in place of the home file. 

app.use(bodyParser.json());
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./app/routes/htmlRoutes.js")(app);
require("./app/routes/search-apiroutes.js")(app);
require("./app/routes/api-routes")(app);


db.sequelize.sync({force: true}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
