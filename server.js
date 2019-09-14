const express = require("express");
const Sequelize = require("sequelize");
const path = require("path");
const fs = require("fs");
const router = require("router");

//EXPRESS CONFIGURATION
const app = express();

app.get("/", (req, res) => res.send("index"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log("Server started on port"));

// const db = require(".app/models/post.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

const routes1 = require("./app/routes/apiroutes.js");
const routes2 = require("./app/routes/htmlRoutes.js");
app.use(routes1)
app.use(routes2)


// db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
//   });





