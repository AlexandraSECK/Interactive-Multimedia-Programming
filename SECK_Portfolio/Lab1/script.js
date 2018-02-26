function addPerson(){
	var n=document.getElementById("name");
	var El=document.getElementById("list");
	if(n.value!="")
		El.innerHTML+=n.value+"</br>";
	n.value="";
}
