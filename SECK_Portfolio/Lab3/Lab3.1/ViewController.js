var listmodel = new ListModel();
registerListeners();
var array;

if (localStorage.getItem("List") != null) {
  document.addEventListener("DOMContentLoaded", function (event) {
    array = localStorage.getItem("List").split(",");
    for (var i = 0, len = array.length; i < len - 1; i++) {
      person = new ListPerson(array[i]);
      listmodel.addNewPerson(person);
    }
  });
}

function addPerson() {
  var name = document.getElementById("nameInput").value;
  if (name != "") {
    var person = new ListPerson(name);
    listmodel.addNewPerson(person);
    document.getElementById("nameInput").value = "";
  }
}

function registerListeners() {
  listmodel.addNewListeners(updatelist);
}

function updatelist() {
  var list = document.getElementById("list");
  list.innerHTML = "";
  listmodel.allPersons.forEach(function (element) {
    list.innerHTML += "<br>" + element.name;
  });
}
