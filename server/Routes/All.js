var express = require('express');
var all = express.Router();

var Schemas = require('../Database/Schemas');

module.exports = class All {
    constructor() { this.initRoutes(); }
    get routes() { return all; }

    initRoutes() { 
        all.get('/unities', function(req, res) {
            Schemas.Unity.find({}, function(err, unities) {
                res.status(200).json({"unities": unities})
            })
        });
    }
}