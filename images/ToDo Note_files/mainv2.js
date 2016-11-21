requirejs(['app/module/addNote', 'app/module/saveNote', 'app/module/showanddeleteNote', 'app/module/localStorage'], function(addNote, saveNote, showanddeleteNote, localStorage) {
    var saveButton = document.getElementById('save');
    saveButton.addEventListener('click', saveNote);
    var formDisplay = document.getElementById('addButton');
    formDisplay.addEventListener('click', addNote);
    var body = document.getElementById('container').innerHTML;
});

var new_Div = document.createElement('div');

var title_note = document.getElementById('title');
var itemForm = document.getElementById('todos');
var editInput = document.createElement('input');
var removeButton = document.createElement('button');
var body = document.getElementById('container');
var storedItem = localStorage.getItem('storedItems')
var addItems = document.getElementById('addItem');
var descriptionNote = document.getElementById('description');
var section = document.getElementsByTagName('section')
var storedItem = document.getElementById('storedItem');

var itemFormCount = 0;
