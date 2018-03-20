//require express
var express = require('express');

// create path helper
var path = require('path');


// create router express
var router = express.Router();

// export Router
module.exports = router;


// route for home page
router.get('/', function(req, res){

  res.render('pages/index');
});

// route for about page
router.get('/about', function(req, res){
// create mockup user array
var users = [

  { name: 'Holly', email: 'kay@gmail.com', avatar: 'https://placekitten.com/400/350'},
  { name: 'Catchy', email: 'm@gmail.com', avatar: 'http://placekitten.com/300/350'},
  { name: 'Moonly', email: 'k@gmail.com', avatar: 'https://i.stack.imgur.com/GjO1U.jpg/300/200'},
];
  res.render('pages/about', { users: users });
});

// route for contact page
router.get('/contact', function(req, res){
  res.render('pages/contact');
});
router.post('/contact', function(req, res){

});
