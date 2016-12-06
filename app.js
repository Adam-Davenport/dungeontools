var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
//Sets the public directory so css and js can be accessed.
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/calculator', function (req, res) {
	res.render('calculator');
});

app.get('/class/paladin', function (req, res) {
	res.render('class/paladin');
});

app.listen(3000, function () {
	console.log('Running dungeons tools server on port 3000.');
});