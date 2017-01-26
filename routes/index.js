// Main Routes
var express = require('express'),
	router  = express.Router()

// Root Route
router.get('/', function (req, res) {
    res.render('index', {title: 'Dungeon Tools'})
})

// Calculator
router.get('/calculator', function (req, res) {
	res.render('calculator', {title: 'Point-Buy Calculator'})
})

module.exports = router