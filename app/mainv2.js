requirejs(['app/module/addNote', 'app/module/saveNote', 'app/module/showanddeleteNote', 'app/module/localStorage'], function(addNote, saveNote, showanddeleteNote, localStorage) {
    var saveButton = document.getElementById('save');
    saveButton.addEventListener('click', saveNote.save);
    var formDisplay = document.getElementById('addButton');
    formDisplay.addEventListener('click', addNote);
    var editButton = document.createElement('editButton');
    editButton.addEventListener('click', showanddeleteNote);


});

var addItems = document.getElementById('addItem');
var descriptionNote = document.getElementById('description');
var section = document.getElementById('container')
var title_note = document.getElementById('title');
var itemForm = document.getElementById('todos');

//localStorage
var storedItem = localStorage.getItem('storedItems')


var itemFormCount = 0;
