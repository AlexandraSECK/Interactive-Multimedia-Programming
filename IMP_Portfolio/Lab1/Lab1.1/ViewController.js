var listmodel = new ListModel();
registerListeners();

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