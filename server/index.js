const express = require('express')
const app = express()

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

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

