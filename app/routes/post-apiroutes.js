var db = require("../models");

module.exports = function(app) {

    app.post("/api/posts", function(req, res) {
        console.log(req.body);
        db.Post.create({
          title: req.body.title,
          body: req.body.body,
          ingredients: req.body.Ingredients,
          instructions: req.body.instructions,
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
};