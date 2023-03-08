var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog - Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Blog - About' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Blog - Contact' });
});

router.get('/post', function(req, res, next) {
  res.render('post', { title: 'Blog - Post' });
});

module.exports = router;
