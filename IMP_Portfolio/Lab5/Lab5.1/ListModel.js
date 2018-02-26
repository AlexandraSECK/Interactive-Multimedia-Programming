function ListModel() {
	this.allPersons = new Array();
	this.changeListeners = new Array();

	this.addNewPerson = function (addable) {
		this.allPersons.push(addable);
		this.notifyChange();
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