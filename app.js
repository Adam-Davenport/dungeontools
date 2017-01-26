// Setting up express and packages
var express = require('express'),
app 				= express(),
mongoose 		= require('mongoose'),
bodyParser 	= require('body-parser'),
flash       = require('connect-flash'),
methodOver	= require('method-override')

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

// Session Configuration
app.use(require('express-session')({
	secret: 'Secret message for dungeon tools, cool beans',
	resave: false,
	saveUninitialized: false
}))

// Setting up flash messages
app.use(flash())

// Setting up global variables
app.use(function(req, res, next){
	res.locals.error = req.flash('error')
	res.locals.message = req.flash('message')
	res.locals.success = req.flash('success')
	next()
})

//=================================
//          Routes
//=================================
var classRoutes   = require('./routes/classes'),
		itemRoutes    = require('./routes/items'),
		indexRoutes   = require('./routes/index'),
		monsterRoutes = require('./routes/monsters')

// Adding the class routes to express
app.use('/classes', classRoutes)
app.use('/items', itemRoutes)
app.use(indexRoutes)
app.use(monsterRoutes)

// Running the server to listen on port 3000
app.listen(3000, function () {
	console.log('Running dungeons tools server on port 3000.')
})