var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// GET /flights
router.get('/', flightsCtrl.index);

// GET /flights/new
router.get('/new', flightsCtrl.new);

// GET /flights/show
router.get('/:id', flightsCtrl.show)

// POST /flights
router.post('/', flightsCtrl.create);

module.exports = router;
