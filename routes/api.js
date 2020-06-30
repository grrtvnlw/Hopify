var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET login page. */
// router.get('/login', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET beers page. */
router.get('/beers', function(req, res, next) {
  db.Beers.findAll({
    include: [{
      model: db.Breweries,
      // attributes: ['name', 'description', 'website'],
      through: {
        attributes: []
      }
    }],
    // attributes: ['name', 'description', 'abv', 'ibu']
  })
    .then(data => {
      res.json(data)
    })
});

/* GET beer by type. */
router.get('/beers/:style', (req, res) => {
  db.Beers.findAll({
    where: {
      style: req.params.style
    }
  })
  .then(data => {
    res.json(data)
  })
});

/* GET beer by city. */
router.get('/beer/:city', (req, res) => {
  console.log(req.params.city)
  db.Beers.findAll({
    where: {
      city: req.params.city
    }
  })
  .then(data => {
    res.json(data)
  })
});

/* GET beer page. */
router.get('/beers/:id', (req, res) => {
  db.Beers.findByPk(req.params.id, {
    include: [{
      model: db.Breweries,
      through: {
        attributes: []
      }
    }]
  })
  .then(data => {
    res.json(data)
  })
})

/* GET breweries page. */
router.get('/breweries', function(req, res, next) {
  db.Breweries.findAll()
    .then(data => {
      res.json(data)
    })
});

/* GET brewery page. */
router.get('/breweries/:id', function(req, res, next) {
  db.Breweries.findByPk(req.params.id)
    .then(data => {
      res.json(data)
    })
});

module.exports = router;
