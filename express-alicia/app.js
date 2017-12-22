var express = require('express');
var app = express();
var port = process.env.PORT || 3000; //If an env variable is setup then we can use that. That'll help in listening to certain port depending on the env we are in like dev or prod

app.get('/', function(req, res) { //this is a get method provided by express framework
  res.send('<html><body><h1>Hello</h1></body></html>');
});

app.get('/api', function(req, res) {
  res.json({firstname: 'John', lastname: 'Doe'});//To display json data.
});

app.get('/person/:id/:page', function(req, res) {
  res.send('<html><body><h1>' + req.params.id + ' ' + req.params.page '</h1></body></html>');
});
app.listen(port);
