//==========================
//    Routes for classes
//==========================

var express = require('express'),
		router  = express.Router()

// Cleric
router.get('/cleric', function (req, res) {
	res.render('classes/cleric', {title: 'Cleric'})
})

// Paladin
router.get('/paladin', function (req, res) {
	res.render('classes/paladin', {title: 'Paladin'})
})

// Rogue
router.get('/rogue', function (req, res) {
	res.render('classes/rogue')
})

module.exports = router