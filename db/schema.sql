DROP DATABASE IF EXISTS `mealrecipes`;
CREATE DATABASE `mealrecipes`;

USE `mealrecipes`;

CREATE TABLE recipes
(
    name VARCHAR(100) NOT NULL,
    url VARCHAR(100) NOT NULL,
    ingredients VARCHAR(500) NOT NULL,
    instructions VARCHAR(500) NOT NULL

        PRIMARY KEY (position)
);


INSERT INTO recipes (name, url, ingredients, instructions)
VALUES ("Quick Oatmeal Pancakes", "https://www.allrecipes.com/recipe/228654/quick-oatmeal-pancakes/photos/879876/", 
        "1 cup milk, 
        2/3 cup quick-cooking oat, 
        2/3 cup all-purpose flour, 
        2 tablespoons brown sugar, 
        1 1/2 teaspoons baking powder, 
        1/2 teaspoon salt, 
        1/4 teaspoon ground cinnamon, 
        2 eggs, 2 teaspoons butter: melted, 
        1/2 teaspoon vanilla extract, 
        1/4 cup milk, or more as needed, 
        2 teaspoons butter, or as needed", 
        "Place 1 cup milk in a microwave-safe bowl; heat in microwave until bubbling, about 2 minutes. Stir in the oats. Mix flour, brown sugar, baking powder, salt, and cinnamon together in a bowl. Whisk eggs, 2 teaspoons melted butter, and vanilla extract together in a separate bowl; add 1/4 cup milk. Mix oat mixture and egg mixture with flour mixture; stir to combine. Heat 2 teaspoons butter on a griddle or skillet over medium heat; pour about 1/3 cup batter into the hot butter. Cook pancakes until bubbles appear on top layer, about 5 minutes. Flip and cook other side until evenly browned, about 5 more minutes.");



