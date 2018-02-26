function jsonCallback(json) {
  for (var i = 0; i < json.length; i++) {
    $("#list").append(json[i].name + " email : ");
    $("#list").append('<a href="mailto:' + json[i].email + '"target="_top">' + json[i].email + '</a> </br>');
  }
}

$(document).ready(function () {
  $("#button").click(function () {
    $.ajax({
      url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp",
      dataType: "jsonp"
    });
  });
});
