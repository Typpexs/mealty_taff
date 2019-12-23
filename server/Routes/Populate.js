var express = require('express');
var populate = express.Router();

var Schemas = require('../Database/Schemas');

function populateTypeIngredient() {
    const TypeIngredient = Schemas.TypeIngredient
    const tabTypes = ["Fruit", "Legume", "Lait", "Viande", "Sucre", "Poisson", "Fruit de mer", "Cereal", "Epice"]
    tabTypes.forEach(element => {
        let type = new TypeIngredient({ name : element});
        type.save();
        console.log(element, "ajoute a la table TypeIngredient");
    });
}

function populateIngredient() {
    const Ingredient = Schemas.Ingredient
    const TypeIngredient = Schemas.TypeIngredient
    const tabIngredients = [
        {name: "Lardon", type: "Viande"},
        {name: "Creme fraiche", type: "Lait"},
        {name: "Spaghetti", type: "Cereal"},
        {name: "Poivre", type: "Epice"}
    ]
    tabIngredients.forEach(element => {
        TypeIngredient.findOne({ name: element.type }, function(err, typeIngredient) {
            let ingredient = new Ingredient({ name: element.name, typeIngredientID: typeIngredient._id });
            ingredient.save()
            console.log(element.name, "ajoute a la table Ingredient");
        })
    });
}

function populateUnity() {
    const Unity = Schemas.Unity
    const tabUnity = ["g", "kg", "ml", "cl", "l", "mm", "cm", "m"]
    tabUnity.forEach(element => {
        let unity = new Unity({ name: element });
        unity.save();
        console.log(element, "ajoute a la table Unity");
    });
}

function populateUstensil() {
    const Ustensil = Schemas.Ustensil
    const Unity = Schemas.Unity
    const tabUstensil = [
        { name: "cuillere en bois" },
        { name: "casserole", capacity: 20, unityID: "cm" },
        { name: "poele", capacity:15, unityID: "cm" }
    ]
    tabUstensil.forEach(element => {
        if (element.capacity) {
            Unity.findOne({ name: element.unityID }, function(err, unity) {
                let ustensil = new Ustensil({ name: element.name, capacity: element.capacity, unityID: unity._id})
                ustensil.save();
                console.log(ustensil, "ajoute a la table ustensil");
            })
        } else {
            let ustensil = new Ustensil({name: element.name});
            ustensil.save();
            console.log(ustensil, "ajoute a la table ustensil");
        }
    });
}

function populateTypeRecipe() {
    const TypeRecipe = Schemas.TypeRecipe
    const tabTypes = ["Rapide", "Saint"]
    tabTypes.forEach(element => {
        let type = new TypeRecipe({ name : element});
        type.save();
        console.log(element, "ajoute a la table TypeRecipe");
    });
}

function populateContinent() {
    const Continent = Schemas.Continent
    const tabContinent = ["Europe", "Asie", "Afrique", "Oceanie", "Amerique du Nord", "Amerique du Sud"]
    tabContinent.forEach(element => {
        let continent = new Continent({ name : element});
        continent.save();
        console.log(element, "ajoute a la table Continent");
    });
}

function populateCountry() {
    const Country = Schemas.Country
    const Continent = Schemas.Continent
    const tabCountry = [
        { name: "France", continent: "Europe" },
        { name: "Japon", continent: "Asie" },
        { name: "Canada", continent: "Amerique du Nord" }
    ]
    tabCountry.forEach(element => {
        Continent.findOne({name: element.continent}, function(err, continent) {
            let country = new Country({name: element.name, continentID: continent._id});
            country.save();
            console.log(country, "ajoute a la table Country");
        })
    })
}

function populateStep() {
    const Step = Schemas.Step
    const tabStep = [
        { order: 1, description: "Mettre les lardons dans la poele a feu doux et commencer a faire bouillir l'eau des pates dans la casserole" },
        { order: 2, description: "Remuer les lardons pour ne pas les faire cramer d'un seul coté."},
        { order: 3, description: "Une fois que l'eau boue, mettre les pates dans l'eau et rajouter la creme fraiche dans les lardons"},
        { order: 4, description: "Remuer les pates, ajouter du poivre dans les lardons et la craime fraiche et remuer le tout" },
        { order: 5, description: "Une fois les pates cuites, les egouter puis les remettres dans la casserole"},
        { order: 6, description: "mettre la sauce carbonara dans la casserole sur les pates et melanger le tout" },
        { order: 7, description: "Bon appetit !"}
    ]
    tabStep.forEach(element => {
        let step = new Step({order: element.order, description: element.description})
        step.save();
        console.log(step, "ajoute a la table Step");
    })
}

function populateRecipe() {
    const Recipe = Schemas.Recipe
    const recette = {
        title: "Pates carbo", 
        ingredients: [ {ingredient:"5df11633b50d2935e8c29d80", number: 75, unity: "5df265188061513db083eeae" }, 
            { ingredient: "5df11634b50d2935e8c29d81", number: 50, unity: "5df265188061513db083eeb1" }, 
            { ingredient: "5df11634b50d2935e8c29d82", number: 250, unity: "5df265188061513db083eeae" }, 
            { ingredient:"5df11635b50d2935e8c29d83" }
        ],


        ustensils: ["5df2652f8061513db083eeb6", "5df2652f8061513db083eeb7", "5df2652f8061513db083eeb8"],
        typeRecipeID: "5df26b2fbe12c2353c7e98ad",
        continentID: "5df26b3dbe12c2353c7e98af",
        countryID: "5df26ef4188283114c0bdaae",
        numberOfPersons: 1,
        timePreparation: 0,
        timeCooking: 10,
        votes: 0,
        steps: ["5df26f1d188283114c0bdab1", "5df26f1d188283114c0bdab2", "5df26f1d188283114c0bdab3", "5df26f1d188283114c0bdab4", "5df26f1d188283114c0bdab5", "5df26f1d188283114c0bdab6", "5df26f1d188283114c0bdab7"]
    }

    let recipe = new Recipe(recette);
    recipe.save();
    console.log(recipe, "ajoute a la table Recipe")
}

module.exports = class Populate {
    constructor() { this.initRoutes(); }
    get routes() { return populate; }

    initRoutes() {
        populate.get('/typeIngredient', function(req, res) {
            populateTypeIngredient();
            res.status(200).json({"good": "oui"})
        })

        populate.get('/ingredient', function(req, res) {
            populateIngredient();
            res.status(200).json({"good": "oui"})
        })

        populate.get('/unity', function(req, res) {
            populateUnity();
            res.status(200).json({"good": "oui"})
        })
        
        populate.get('/ustensil', function(req, res) {
            populateUstensil();
            res.status(200).json({"good": "oui"})
        })

        populate.get('/typeRecipe', function(req, res) {
            populateTypeRecipe();
            res.status(200).json({"good": "oui"})
        })

        populate.get('/continent', function(req, res) {
            populateContinent();
            res.status(200).json({"good": "oui"})
        })

        populate.get('/country', function(req, res) {
            populateCountry();
            res.status(200).json({"good": "oui"})
        })

        populate.get('/step', function(req, res) {
            populateStep();
            res.status(200).json({"good": "oui"})
        })

        populate.get('/recipe', function(req, res) {
            populateRecipe();
            res.status(200).json({"good": "oui"})
        })
    }

}