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

app.listen(3000, function () {
	console.log('Running dungeons tools server on port 3000.');
});