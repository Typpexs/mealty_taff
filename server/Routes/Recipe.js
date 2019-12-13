var express = require('express');
var recipe = express.Router();

var Schemas = require('../Database/Schemas');

module.exports = class Recipe {
    constructor() { this.initRoutes(); }
    get routes() { return recipe; }

    initRoutes() { 
        recipe.get('/recipe/:id', function(req, res) {
            Schemas.Recipe.findById()
        });
    }
}