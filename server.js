// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
//Port
var port = process.env.PORT || 8080;  

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors())

// Routes
app.get('/invoice', function(req, res){
   res.send('Express is workiung on IISNode')
});

app.get('/todo',  function(req, res){
       

      
      request('https://jsonplaceholder.typicode.com/todos', function (error, response, body) {
      res.send(body);

      })

});

app.get('/todo/:id',  function(req, res){
       

      var id = req.params.id;
      request(`https://jsonplaceholder.typicode.com/todos/${id}`, function (error, response, body) {
console.log(req.params.id);      
res.send(body);

      })

});




 // Start server
app.listen(port);
console.log("API is running on port " + port);

