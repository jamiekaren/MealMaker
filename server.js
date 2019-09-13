const express = require("express");
const Sequelize = require("sequelize");
const path = require("path");

//EXPRESS CONFIGURATION
const app = express();
const PORT = process.env.PORT || 8080;

// const db = require(".app/models/post.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

const routes1 = require("./app/routes/apiroutes.js");
// const routes2 = require("./app/routes/htmlRoutes.js");
app.use(routes1)
// app.use(routes2)


// db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
//   });





