var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var TypeIngredientSchema = new Schema({
    name: String
});

var IngredientSchema = new Schema({
    name: String,
    typeIngredientID: Schema.Types.ObjectId //TypeIngredientSchema
});

var UnitySchema = new Schema({
    name: String
})

var UstensilSchema = new Schema({
    name: String,
    capacity: Number,
    unityID: Schema.Types.ObjectId //UnitySchema
})

var TypeRecipeSchema = new Schema({
    name: String
})

var ContinentSchema = new Schema({
    name: String
})

var CountrySchema = new Schema({
    name: String,
    continentID: Schema.Types.ObjectId //ContinentSchema
})

var StepSchema = new Schema({
    order: Number,
    description: String
})

var RecipeSchema = new Schema({
    title: String,
    ingredients: [
        {
            ingredient: Schema.Types.ObjectId,
            number: Number,
            unity: Schema.Types.ObjectId
        }    
    ], // IngredientSchema],
    ustensils: [Schema.Types.ObjectId], // UstensilSchema],
    typeRecipeID: Schema.Types.ObjectId, //TypeRecipeSchema,
    continentID: Schema.Types.ObjectId, //ContinentSchema,
    countryID: Schema.Types.ObjectId, //CountrySchema,
    numberOfPersons: Number,
    timePreparation: Number,
    timeCooking: Number,
    votes: Number,
    steps: [Schema.Types.ObjectId],// StepSchema],
    dateCreated: {type: Date, default: Date.now},
    dateEdited: {type: Date, default: Date.now}
});

module.exports = { 
    TypeIngredient: mongoose.model('TypeIngredient', TypeIngredientSchema),
    Ingredient: mongoose.model('Ingredient', IngredientSchema),
    Unity: mongoose.model('Unity', UnitySchema),
    Ustensil: mongoose.model('Ustensil', UstensilSchema),
    TypeRecipe: mongoose.model('TypeRecipe', TypeRecipeSchema),
    Continent: mongoose.model('Continent', ContinentSchema),
    Country: mongoose.model('Country', CountrySchema),
    Step: mongoose.model('Step', StepSchema),
    Recipe: mongoose.model('Recipe', RecipeSchema)
  }