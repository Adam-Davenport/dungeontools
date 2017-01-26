// Setting up express and packages
var express = require('express'),
app 				= express(),
mongoose 		= require('mongoose'),
bodyParser 	= require('body-parser'),
flash       = require('connect-flash'),
methodOver	= require('method-override'),
Monster 		= require('./models/monster')

//Connecting mongoose to the local database
mongoose.connect('mongodb://localhost/dungeontools')
// Using bluebird promise library for mongoose
mongoose.Promise = require('bluebird')

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
var classRoutes   = require('./routes/classes'),
		itemRoutes    = require('./routes/items'),
		indexRoutes   = require('./routes/index')

// Adding the class routes to express
app.use('/classes', classRoutes)
app.use('/items', itemRoutes)
app.use(indexRoutes)

//========================
//   Monster routes
//========================


// Running the server to listen on port 3000
app.listen(3000, function () {
	console.log('Running dungeons tools server on port 3000.')
})