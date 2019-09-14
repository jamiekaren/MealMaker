const db = require("mealsArr");

//  function(app) {
 
    router
    .route("/")
    .get("/api/mealsArr/", function(req, res) {
        db.Post.findAll({})
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });  
// }

module.exports = router;