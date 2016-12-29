// Getting elements
var scores = document.getElementsByClassName("score");

function updateScores(){
	scores.forEach( function(score, i) {
		var s = parseInt(score.value),
		m = Math.floor((s/10)-2, 0);
		score.value = s.toString() + " ("+ m + ")";
	});
}