// Item Model
var mongoose = require('mongoose')
var itemSchema = new mongoose.Schema({
	name: String,
	type: String,
	description: String,
	weight: Number,
	gold: Number,
	silver: Number,
	copper: Number
})
module.exports = mongoose.model('Item', itemSchema)
