function addPerson(){
	var n=document.getElementById("name");
	var element=document.getElementById("list");
	if(n.value!="")
		element.innerHTML+=n.value+"</br>";
	n.value="";
}
