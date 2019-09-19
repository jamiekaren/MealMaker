const express = require("express");
const Sequelize = require("sequelize");
const path = require("path");
const fs = require("fs");
const router = require("router");
// import the models folder
const db = require("./models")


// nescessary npm middleware packages
const session = require("express-session");


// must require to the routes
const authRoutes = require('./app/routes/auth-routes');
// must run the code for passport
const passportSetup = require('./config/passport-setup');

//EXPRESS CONFIGURATION
const app = express();
// db.sequelize.sync()

// app.get("/", (req, res) => res.send("home")); //Check to see if this should be home

const PORT = process.env.PORT || 8080;

// Body Parser
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));//Check to see if we need this folder in place of the home file. 


require("./app/routes/post-apiroutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);
require("./app/routes/search-apiroutes.js")(app);


// //session middleware for passport
// app.use(express.cookieParser());
// app.use(express.session({ secret: 'process.env.hdiRTl34snR' }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(app.router);

// // auth routes
// app.use('/auth', authRoutes);


// app.use(routes1)
// app.use(routes2)
// app.use(routes3)

// app.use('/routes', routes);


db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
