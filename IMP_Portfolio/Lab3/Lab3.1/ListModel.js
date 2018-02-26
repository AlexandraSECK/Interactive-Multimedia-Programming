function ListModel() {
  this.allPersons = new Array();
  this.changeListeners = new Array();

  this.addNewPerson = function (addable) {
    var list = "";
    this.allPersons.push(addable);
    this.notifyChange();
    this.allPersons.forEach(function (element) {
      list += element.name + ",";
    });
    localStorage.setItem("List", list);
  }

  this.notifyChange = function () {
    this.changeListeners.forEach(function (changeListener) {
      changeListener();

    });
  }

  this.addNewListeners = function (newListener) {
    this.changeListeners.push(newListener);
  }
}