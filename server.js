
// server.js
// import the http module

var http = require('http');

// //handle sending requests and response
// function handleRequests(req, res) {
//
//   //return string
//
//   res.end('Hello world');
// }
//
// //create the server
//
// var server = http.createServer(handleRequests);
//
// // start server and listen on port x
// server.listen(8080, function(){
//   console.log('Server listing on port 8080');
// });

//// express /////

// require for dependencies
// server.js
var express = require('express');
var expresslayouts = require('express-ejs-layouts');

var bodyParser = require('body-parser');

var app = express();
var port = 8080;

// set view engine to ejs
app.set('view engine', 'ejs');
app.use(expresslayouts);

// use bodyParser
app.use(bodyParser.urlencoded());

var router = require('./app/routes');
app.use('/', router);

// setup statis files (css and img) and location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
  console.log('app started');
});
