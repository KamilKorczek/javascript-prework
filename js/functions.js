function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
	
}
function printResult(rsl){
	var div =document.createElement('div');
	div.innerHTML = rsl;
	document.getElementById('result').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function clearResult(){
	document.getElementById('result').innerHTML = '';
}