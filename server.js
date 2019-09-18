const express = require("express");
const Sequelize = require("sequelize");
const path = require("path");
const fs = require("fs");
const router = require("router");
const db = require("./models")
const authRoutes = require('./app/routes/auth-routes');
// must run the code for passport
const passportSetup = require('./config/passport-setup');
const routes = require('./app/routes');

//EXPRESS CONFIGURATION
const app = express();
// db.sequelize.sync()

app.get("/", (req, res) => res.send("home")); //Check to see if this should be home

const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use(express.static("public"));//Check to see if we need this folder in place of the home file. 





const routes1 = require("./app/routes/post-apiroutes.js");
const routes2 = require("./app/routes/htmlRoutes.js");
const routes3 = require("./app/routes/search-apiroutes.js");

// app.use(routes1)
// app.use(routes2)
// app.use(routes3)




app.use('/routes', routes);
// auth routes
app.use('/auth', authRoutes);




db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  });

