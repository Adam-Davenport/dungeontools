var scores = document.getElementsByClassName("ability"),
		prof = document.getElementById("prof");

updateScores();
setProf();


function updateScores(){
	for(i=0; i<scores.length; i++){
		createOption(scores[i], 0, 40)
	}
}

function setProf() {
	createOption(prof, 1, 6);
}

function createOption(select, i, j){
	while(i<j){
		var option = document.createElement("option");
		option.text = i;
		select.add(option);
		i++;
	}
	return select;
}
