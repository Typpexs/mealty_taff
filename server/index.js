const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
})

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error:'));
db.once('open', function() {
  console.log("Database connected.");
});



app.get('/', function (req, res) {
  res.send('Hello World!')
})


let routePopulate = require('./Routes/Populate');
let populate = new routePopulate();
app.use('/populate', populate.routes);


let routeRecipe = require('./Routes/Recipe');
let recipe = new routeRecipe();
app.use('/recipe', recipe.routes);

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

