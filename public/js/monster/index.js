var monsters = document.getElementsByClassName('monster')

for(i=0; i<monsters.length; i++){
	monsters[i].href= '/monsters/' + monsters[i].text.replace(' ', '_')
}