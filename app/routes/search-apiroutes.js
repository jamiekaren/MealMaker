// Dependencies
var recipes = require('../data/mealdata.js');
const db = require("../../models")
// Export the function
module.exports = function (app) {

    // Sets the get for the api/friends route
    app.get('/api/mealdata', function (req, res) {
        db.Post.findAll({})
            .then(function (dbPost) {
                res.json(recipes);
            })
        
        for (var i = 0; i < mealsArr.length; i++) {
            console.log(mealsArr[i].name);
        }
    })
    mealsArr.push(req.body);
};
