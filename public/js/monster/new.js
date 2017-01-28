var scores = document.getElementsByClassName('ability'),
		prof = document.getElementById('prof'),
		types = document.getElementById('type'),
		actionList,
		actions

updateScores()
setProf()
setTypes()


function updateScores(){
	for(i=0; i<scores.length; i++){
		createOption(scores[i], 0, 40)
		scores[i].selectedIndex = 10
	}
}

function setProf() {
	createOption(prof, 1, 6)
}

function createOption(select, i, j){
	while(i<j){
		var option = document.createElement('option')
		option.text = i
		select.add(option)
		i++
	}
	return select
}

function addAction(){
	getActions()
	var action = document.createElement('input')
	action.type = 'text'
	action.classList.add('action')
	action.classList.add('form-control')
	insertAfter(action, actions[actions.length-1])
	action.name = 'monster[actions][' + String(actions.length-1) + ']'
}

function getActions(){
	actionList = document.getElementsByClassName('actionList')
	actions = document.getElementsByClassName('action')
}

function insertAfter(newNode, referenceNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

function setTypes() {
	var typesList = getTypes()
	for(i=0; i<typesList.length; i++){
		var type = document.createElement('option')
		type.text = typesList[i]
		type.value = typesList[i]
		types.add(type)
	}
}

function getTypes() {
	return typesList = [
		'Aberation',
		'Beast',
		'Celestial',
		'Construct',
		'Dragon',
		'Elemental',
		'Fey',
		'Fiend',
		'Giant',
		'Humanoid',
		'Monstrosity',
		'Ooze',
		'Plant',
		'Undead'
	]
}