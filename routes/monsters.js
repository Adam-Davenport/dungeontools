// Monster Routes
var express = require('express'),
		router  = express.Router()

// Index Route
app.get('/monsters', function (req, res) {
	Monster.find({}, function (error, monsters) {
		if(error){
			console.log(error)
		}
		else{
			res.render('monsters/index', {title: 'Monsters', monsters: monsters})
		}
	})
})

// New Route
app.get('/monsters/new', function (req, res) {
	res.render('monsters/new', {title: 'New Monster'})
})

// Create route
app.post('/monsters', function(req,res){
	Monster.create(req.body.monster, function (error) {
		if(error){
			console.log(error)
		}
		else{
			res.redirect('/monsters')
		}
	})
})

// Show Route
app.get('/monsters/:id', function (req, res) {
	// Remove all dashes from the id param to search in the DB probably
	var thisMonster = req.params.id.replace('_', ' ')
	Monster.findOne({name: thisMonster}, function(error, foundMonster){
		if(error || foundMonster == null){
			res.send(error)
		}
		else{
			res.render('monsters/show', {title: foundMonster.name, monster: foundMonster})
		}
	})
})

// Edit
app.get('/monsters/:id/edit', function (req, res) {
	Monster.findOne({name: req.params.id}, function (error, foundMonster){
		if(error || foundMonster == null){
			if(error){
				res.send(error)
			}
			else{
				res.send('Monster not found')
			}
		}
		else{
			res.render('monsters/edit', {title: 'Edit ' + foundMonster.name, monster: foundMonster})
		}
	})
})

// Update
app.put('/monsters/:id', function(req, res){
	Monster.findOneAndUpdate({name: req.params.id}, req.body.monster, function (error) {
		console.log(req.body.monster)
		if(error){
			console.log(error)
			res.redirect('/monsters')
		}
		res.redirect('/monsters/'+req.body.monster.name.replace(' ', '_'))
	})
})

// Delete Route
app.get('/monsters/:id/delete', function (req, res) {
	Monster.findOneAndRemove({name: req.params.id}, function (error) {
		if(error){
			res.send(error)
		}
		else{
			res.redirect('/monsters')
		}
	})
})

module.exports = router