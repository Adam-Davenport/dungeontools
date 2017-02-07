var scores = document.getElementsByClassName('ability'),
	actionList,
	actions

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

