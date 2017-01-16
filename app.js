// Setting up express and packages
var express = require('express'),
app 				= express(),
mongoose 		= require('mongoose'),
bodyParser 	= require('body-parser'),
 methodOver	= require('method-override'),
Monster 		= require('./models/monster')

//Connecting mongoose to the local database
mongoose.connect('mongodb://localhost/dungeontools')

// Setup body-parser middleware
app.use(bodyParser.urlencoded({extended: true}))

// Sets the public directory so css and js can be accessed.
app.use(express.static(__dirname + '/public'))

// Set the templating engine to EJS
app.set('view engine', 'ejs')

// Use method override
app.use(methodOver('_method'))

//=================================
//          Routes
//=================================
var classRoutes = require('./routes/classes')

// Adding the class routes to express
app.use('/classes', classRoutes)

// ********************************
//     Rendering the main pages
// ********************************

// Root Route
app.get('/', function (req, res) {
    res.render('index', {title: 'Dungeon Tools'})
})

// Calculator
app.get('/calculator', function (req, res) {
	res.render('calculator', {title: 'Point-Buy Calculator'})
})


//========================
//   Monster routes
//========================

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

// Running the server to listen on port 3000
app.listen(3000, function () {
	console.log('Running dungeons tools server on port 3000.')
})