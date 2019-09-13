const db = require("./app/models/post.js");

//  function(app) {

    router
    .route("/")
    .get("/api//", function(req, res) {
        db.Post.findAll({})
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });  
// }

module.exports = router