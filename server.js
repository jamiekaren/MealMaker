const express = require("express");
const Sequelize = require("sequelize");
const path = require("path");
const fs = require("fs");
const router = require("router");
// import the models folder
const db = require("./models")

const app = express();

const PORT = process.env.PORT || 8080;

// Body Parser
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));//Check to see if we need this folder in place of the home file. 

require("./app/routes/htmlRoutes.js")(app);
require("./app/routes/search-apiroutes.js")(app);


db.sequelize.sync({force: true}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
