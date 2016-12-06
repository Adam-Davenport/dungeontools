//Setting up variables
var scores = document.getElementsByClassName("base");
var costs = document.getElementsByClassName("cost");
var raceBonus = document.getElementsByClassName("race");
var race = document.getElementById("race");
var totals = document.getElementsByClassName("total");
var mods = document.getElementsByClassName("modifier");
var points = document.getElementById("points");
var remaining = document.getElementById("remaining");


//Functions that need to be run after the page loads
populatePoints();
points.value = 27; //Sets the default selected option should be executed after the selects are populated
setScores();
update();
addRaces();
updateRace();
calculateTotals();

//******* Update Functions *******

//function that is called when selects are updated
function update(){
		for (var i = 0; i < costs.length; i++) {
			var temp = parseInt(scores[i].value);
			costs[i].value = pointCost(temp);
		}
		calculateTotals();
		calculateCosts();
}

//Called when the race select is changed
function updateRace(){
	r = race.value;
	var bonuses;
	switch (r) {
		case "human":
			bonuses = [1,1,1,1,1,1];
			break;
		default:
			bonuses = [0,0,0,0,0,0];
			break;
	}
	setRaceBonus(bonuses);
}

//This takes the array from the race's statblock and displays it in the racial bonus blocks
function setRaceBonus(b){
	for (var i = 0; i < b.length; i++) {
		raceBonus[i].value = b[i];
	}
}



//Calculates the totals of each stat and the modifier and populates the text boxes
function calculateTotals(){
	for (var i = 0; i < scores.length; i++) {
		totals[i].value = parseInt(scores[i].value) + parseInt(raceBonus[i].value);
		mods[i].value = Math.floor((parseInt(totals[i].value) - 10)/2);	
	}
	// calculateModifiers();
}



//Calculates how many points are remaining
function calculateCosts(){
	var remainingPoints = 0;
	for (var i = 0; i < costs.length; i++) {
		remainingPoints += parseInt(costs[i].value);
	}
	remainingPoints = parseInt(points.value) - remainingPoints;
	remaining.value = remainingPoints;
}

//Calculate point cost based upon the score sent as an input
function pointCost (score){
	switch (score) {
		case 8:
			return 0;
			break;
		case 9:
			return 1;
			break;
		case 10:
			return 2;
			break;
		case 11:
			return 3;
			break;
		case 12:
			return 4;
			break;
		case 13:
			return 5;
			break;
		case 14:
			return 7;
			break;
		case 15:
			return 9;

	}
}

//******** Select Population *******

//Set up initial page stuff
function setScores (){
	for (var i = 0; i < scores.length; i++) {
		for(var j = 8; j <16; j++){
			var option = document.createElement("option");
			option.text = j;
			scores[i].add(option);
		}
	}
}
//This function adds the options for races to the race select
function addRaces(){
	var raceList = ["human", "dwarf", "elf"]
	for (var i = 0; i < raceList.length; i++) {
		var option = document.createElement("option");
		option.text = raceList[i];
		race.add(option);
	}
}
//Populates the select for the available point buy options
function populatePoints(){
	for (var i = 20; i < 41; i++) {
		var option = document.createElement("option");
		option.text = i;
		points.add(option);
	}
}

//Validate that there are points remaining