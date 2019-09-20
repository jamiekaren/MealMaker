// Dependencies
const sequelize = require("sequelize");

const Op = sequelize.Op;

require("dotenv").config();
// Export the function

const db = require("../../models")

// // Exported function
 module.exports = function (app) {
    app.get("/api/search/:name", function(req, res) {
        db.Post.findAll({
          where: {
            name: {
            [Op.like]: "%" + req.params.name + "%"
            }
          }
        })
          .then(function(dbPost) {
            res.json(dbPost);
          })
      })
    };
