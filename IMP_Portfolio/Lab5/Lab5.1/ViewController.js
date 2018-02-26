var listmodel = new ListModel();
registerListeners();


function addPerson() {
  if ($("#nameInput").val() != "") {
    var person = new ListPerson($("#nameInput").val());
    listmodel.addNewPerson(person);
    $("#nameInput").val("");
    registerListeners();
  }
}

function registerListeners() {
  listmodel.addNewListeners(updatelist);
}

function updatelist() {
  $("#list").text("");
  $.each(listmodel.allPersons, function (key, value) {
    $('#list').append(value.name + "</br>");
  });


}

$(document).ready(function () {
  $("button").on("click", addPerson);
});

