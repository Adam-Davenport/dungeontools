// Setting up express and handlebars
var express = require('express'),
	exphbs  = require('express-handlebars'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

//Connecting mongoose to the local database
mongoose.connect("mongodb://localhost/dungeontools");

// Setup body-parser middleware
app.use(bodyParser.urlencoded({extended: true}));

// Sets the public directory so css and js can be accessed.
app.use(express.static(__dirname + '/public'));

// Setting up view engines
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// ********************************
//     Rendering the main pages
// ********************************
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/calculator', function (req, res) {
	res.render('calculator');
});

app.get('/class/paladin', function (req, res) {
	res.render('class/paladin');
});

// ********************************
//      Monster Collection
// ********************************

// setting up mongoose for mosnters
var monsterSchema = new mongoose.Schema({
	name: String,
	health: Number
});

// Create a DB model for monsters
var Monster = mongoose.model("Monster", monsterSchema);

app.get('/monsters', function (req, res) {
	res.render('monsters');
})

app.post('/monsters', function(req,res){
	res.send(req.body.monster);
});

app.get('/monsters/new', function (req, res) {
	res.render('monsters/new');
})

// Running the server to listen on port 3000
app.listen(3000, function () {
	console.log('Running dungeons tools server on port 3000.');
});