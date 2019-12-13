var express = require('express');
var recipe = express.Router();

var Schemas = require('../Database/Schemas');

module.exports = class Recipe {
    constructor() { this.initRoutes(); }
    get routes() { return recipe; }

    initRoutes() { 

        recipe.get('/:id', function(req, res) {
            let recipeId = req.params.id;
            Schemas.Recipe.findById(recipeId, function(err, recipe) {
                res.status(200).json({"recipe": recipe});
            });
        });
        
    }
}