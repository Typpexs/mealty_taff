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

        recipe.get('/ingredient/:id', function(req, res) {
            let ingId = req.params.id;
            Schemas.Ingredient.findById(ingId, function(err, ingredient) {
                res.status(200).json({"ingredient": ingredient})
            })
        });
     
        recipe.get('/unity/:id', function(req, res) {
            let ingId = req.params.id;
            Schemas.Unity.findById(ingId, function(err, unity) {
                res.status(200).json({"unity": unity})
            })
        });

        recipe.get('/ustensil/:id', function(req, res) {
            let ustId = req.params.id;
            Schemas.Ustensil.findById(ustId, function(err, ustensil) {
                res.status(200).json({"ustensil": ustensil})
            })
        });

        recipe.get('/country/:id', function(req, res) {
            let couId = req.params.id;
            Schemas.Country.findById(couId, function(err, country) {
                res.status(200).json({"country": country})
            })
        });

        recipe.get('/continent/:id', function(req, res) {
            let couId = req.params.id;
            Schemas.Continent.findById(couId, function(err, continent) {
                res.status(200).json({"continent": continent})
            })
        });

        recipe.get('/typeRecipe/:id', function(req, res) {
            let typeId = req.params.id;
            Schemas.TypeRecipe.findById(typeId, function(err, typeRecipe) {
                res.status(200).json({"typeRecipe": typeRecipe})
            })
        });

    }
}