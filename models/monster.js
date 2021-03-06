// Monster Model
var mongoose = require('mongoose')
var monsterSchema = new mongoose.Schema({
	name: String,
	level: Number,
	hd: Number,
	bonusHealth: Number,
	type: String,
	size: String,
	ac: Number,
	speed: String,
	str: Number,
	dex: Number,
	con: Number,
	int: Number,
	wis: Number,
	cha: Number,
	saving: String,
	skills: String,
	senses: String,
	languages: String,
	challenge: String,
	actions: Array
})
module.exports = mongoose.model('Monster', monsterSchema)