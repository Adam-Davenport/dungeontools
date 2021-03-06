// Item Routes
var express = require('express'),
	router  = express.Router(),
	Item    = require('../models/item')

// Index
router.get('/', function (req, res) {
	res.render('items/index', {title: 'Items'})
})

// New
router.get('/new', function (req, res) {
	res.render('items/new', {title: 'Create new item'})
})

// Show
router.get('/:item', function (req, res) {
	res.render('items/show', {title: 'Item'})
})


// Create
router.post('/', function (req, res) {
	res.redirect('/items')
})

// Edit
router.get('/:item/edit', function (req, res) {
	res.render('/' + req.params.item)
})

// Update
router.put('/:item', function (req, res) {
	res.redirect('/' + req.params.item)
})

module.exports = router;