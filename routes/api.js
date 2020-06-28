var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET beers page. */
router.get('/beers', function(req, res, next) {
  db.Beers.findAll()
    .then(data => {
      res.json(data)
    })
});

/* GET breweries page. */
router.get('/breweries', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
