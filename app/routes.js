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
  // res.send('hello world this is about page.');
  //res.sendFile(path.join(__dirname, '../about.html'));
  res.render('pages/about');
});

// route for contact page
router.get('/contact', function(req, res){
  res.render('pages/contact');
});
router.post('/contact', function(req, res){

});
