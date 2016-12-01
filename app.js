var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mustacheExpress = require('mustache-express');

// Register '.html' extension with The Mustache Express
app.engine('html', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views'); // you can change '/views' to '/public',
    // but I recommend moving your templates to a directory
    // with no outside access for security reasons

app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(3000, function () {
	console.log("The server has started.")
})