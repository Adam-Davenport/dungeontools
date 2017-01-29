var savedScores = [],
	newScores = document.getElementsByClassName('newScore')

// Scores
saveScores()

// Proficiency Bonus
// saveProf()

setTypes()
setLevels()
// addHD()

function saveScores(){
	for(i=0; i<scores.length; i++){
		savedScores[i] = scores[i].value
		scores[i].removeChild(newScores[0])
	}
	setScores()
	for(i=0; i<scores.length; i++){
		scores[i].value = savedScores[i]
	}
}

