// Setting up express and packages
var express = require('express'),
app 				= express(),
mongoose 		= require('mongoose'),
bodyParser 	= require('body-parser'),
Monster 		= require('./models/monster'),
methodOver	= require('method-override'),
exphbs  		= require('express-handlebars');

//Connecting mongoose to the local database
mongoose.connect("mongodb://localhost/dungeontools");

// Setup body-parser middleware
app.use(bodyParser.urlencoded({extended: true}));

// Sets the public directory so css and js can be accessed.
app.use(express.static(__dirname + '/public'));

// Setting up view engines
app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

// ********************************
//     Rendering the main pages
// ********************************

// Root Route
app.get('/', function (req, res) {
    res.render('index', {title: "Dungeon Tools"});
});

// Calculator
app.get('/calculator', function (req, res) {
	res.render('calculator', {title: "Point-Buy Calculator"});
});

app.get('/class/paladin', function (req, res) {
	res.render('class/paladin', {title: "Paladin"});
});

// ********************************
//      Monster Collection
// ********************************

//********************
//   Monster routes
//******************

// Index Route
app.get('/monsters', function (req, res) {
	Monster.find({}, function (error, monsters) {
		if(error){
			console.log(error);
		}
		else{
			res.render('monsters/index', {title: "Monsters", monsters: monsters});
		}
	});
})

// New Route 
app.get('/monsters/new', function (req, res) {
	res.render('monsters/new', {title: "New Monser"});
});

// Create route
app.post('/monsters', function(req,res){
	var body = req.body;
	var newMonster = {
		name: body.name,
		health: body.health, 
		type: body.type,
		size: body.size,
		ac:body.ac,
		speed: body.speed,
		str: body.str,
		dex: body.dex,
		con: body.con,
		int: body.int,
		wis: body.wis,
		cha: body.cha,
		prof: body.prof,
		saving: body.saving,
		skills: body.skills,
		senses: body.senses,
		languages: body.languages,
		challenge: body.challenge,
		actions: body.actions}
	Monster.create(newMonster, function (error) {
		if(error){
			console.log(error);
		}
		else{
			res.redirect('/monsters');
		}
	})
});

// Show Route
app.get('/monsters/:id', function (req, res) {
	Monster.findOne({name: req.params.id}, function(error, foundMonster){
		if(error || foundMonster == null){
			res.send(error);
		}
		else{
			res.render('monsters/show', {title: foundMonster.name, monster: foundMonster});
		}
	})
});

// Edit
app.get('/monsters/:id/edit', function (req, res) {
	Monster.findOne({name: req.params.id}, function (error, foundMonster){
		if(error || foundMonster == nul){
			res.send(error);
		}
		else{
			res.render('monsters/edit', {title: 'Edit ' + foundMonster.name, monster: foundMonster});
		}
	});
});

// Update
app.put('/monsters/:id', function(req, res){

});

// Running the server to listen on port 3000
app.listen(3000, function () {
	console.log('Running dungeons tools server on port 3000.');
});