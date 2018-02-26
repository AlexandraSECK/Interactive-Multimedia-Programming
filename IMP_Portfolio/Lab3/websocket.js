var connection = new WebSocket((window.location.protocol == "https:" ? "wss://" : "ws://")+"obscure-waters-98157.herokuapp.com");
(window.location.protocol == "https:" ? "wss://" : "ws://")

connection.onmessage = function(message){
	document.getElementById("chat").innerHTML+=message.data+ "<br/>";
}


function envoyer(){
	var message=document.getElementById("mess");
	connection.send(message.value);
	if(connection.readyState==1)
		document.getElementById("connect").innerHTML="connected";
	else
		document.getElementById("connect").innerHTML="disconnected";
}
