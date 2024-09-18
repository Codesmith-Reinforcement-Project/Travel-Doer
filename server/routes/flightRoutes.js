const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.post('/search-flights', flightController.searchFlights);

module.exports = router;