const db = require("../../models")
const router = require("router");
module.exports = function(app) {
 
    // router
    // .route("/")
    app.get("/api/posts", function(req, res) {
        db.Post.findAll({})
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });  

      //Get route
      app.get("/api/posts/name", function(req, res) {
        db.Post.findAll({
          where: {
            name: req.params.name
          }
        })
        .then(function(dbPost) {
          res.json(dbPost);
        });
      });

//POST route
app.post("/api/posts", function(req, res) {
  console.log(req.body);
  db.Post.create({
    name: req.body.name,
    body: req.body.body,
    category: req.body.category
  })
  .then(function(dbPost) {
    res.json(dbPost);
  });
});

// DELETE route
app.delete("/api/posts/:id", function(req,res) {
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(dbPost) {
    res.json(dbPost);
  });
});

app.put("/api/posts", function(req, res) {
  db.Post.update(req.body,
  {
    where: {
      id: req.body.id
    }
  })
  .then(function(dbPost) {
    res.json(dbPost);
  });
});
};

// module.exports = router;