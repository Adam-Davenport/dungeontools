// Monster Model
var mongoose = require("mongoose");
var monsterSchema = new mongoose.Schema({
	name: String,
	health: String,
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
	prof: Number,
	saving: String,
	skills: String,
	senses: String,
	languages: String,
	challenge: String,
	actions: Array
});
module.exports = mongoose.model("Campground", campgroundSchema);