var express = require('express');
var router = express.Router();
const db = require('../models')

/* Works with:
 * /beers?style=ipa
 * /beers?city=atlanta
 * /beers?city=atlanta&style=ipa
 */

const { Op } = require("sequelize");
router.get('/beers', (req, res) => {
  let query = [];
  if (req.query.style) {
    query.push({ style: req.query.style })
  }
  if (req.query.city) {
    query.push({ city: req.query.city })
  }
  db.Beers.findAll({
    where: {
      [Op.and]: query
    }
  })
  .then(data => {
    res.json(data)
  })
});

/* GET beers page. */
router.get('/beers', function(req, res, next) {
  db.Beers.findAll({
    include: [{
      model: db.Breweries,
      through: {
        attributes: []
      }
    }],
  })
    .then(data => {
      res.json(data)
    })
});

/* GET beer by style. */
router.get('/beer/:style', (req, res) => {
  db.Beers.findAll({
    where: {
      style: req.params.style
    }
  })
  .then(data => {
    res.json(data)
  })
});

module.exports = router;
