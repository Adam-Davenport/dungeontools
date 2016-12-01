var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
	res.send("Test");
});

app.listen(3000, function () {
	console.log("Server has started.")
});