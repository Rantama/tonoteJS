define(function() {
    var saveButton = document.getElementById('save');
    var section = document.getElementById('container');
    var storedItem;

    var editObj = {
        title: null,
        description: null
    }

    return {
        save: function(e) {
            e.preventDefault();


            if (saveButton.textContent == "Save") {

                itemForm.style.display = 'none';



                var noteStorage = document.createElement('section');
                noteStorage.setAttribute('class', 'saveNotehere');

                var editButton = document.createElement('button');
                editButton.setAttribute('class', 'noteEditting');
                var img1 = document.createElement('img');
                img1.className = "editButton";
                img1.src = "images/editbutton.png";
                editButton.appendChild(img1);
                noteStorage.appendChild(editButton);

                var removeButton = document.createElement('button');
                removeButton.setAttribute('class', 'removingNote')
                var img2 = document.createElement('img');
                img2.className = "removeButton";
                img2.src = "images/deletebutton.jpeg";
                removeButton.appendChild(img2);
                noteStorage.appendChild(removeButton);


                var todoNote = document.createElement('div');
                var NoteItem = document.createElement('strong');
                NoteItem.textContent = 'Title: ';
                todoNote.appendChild(NoteItem);
                var html = document.createElement('div');
                html.textContent = title_note.value;
                html.class = 'Note_title';
                todoNote.appendChild(html);
                noteStorage.appendChild(todoNote);


                var Notedescription = document.createElement('div');
                var NoteItem = document.createElement('strong');
                NoteItem.textContent = 'Description: ';
                Notedescription.appendChild(NoteItem);
                var html = document.createElement('div');
                html.textContent = descriptionNote.value;
                html.class = 'Description_title';
                Notedescription.appendChild(html);
                noteStorage.appendChild(Notedescription);


                var createDate = document.createElement('div');
                createDate.className = 'dateCreation';
                createDate.innerHTML = '<i>Created Time:</i> ' + Date();
                noteStorage.appendChild(createDate);

                var editDate = document.createElement('div');
                editDate.setAttribute('class', 'dateEdited');
                noteStorage.appendChild(editDate);
                section.appendChild(noteStorage);


            } else if (saveButton.textContent == 'Edit') {
                itemForm.style.display = 'none';

                console.log(editObj);

                editObj.title.textContent = title_note.value;
                editObj.description.textContent = descriptionNote.value;
                currentNode.childNodes[5].innerHTML = '<i>Edited Time:</i> ' + Date();
            }

            var container = document.getElementById('container')
            console.log(todos.children)
            console.log('today');


            var storeLocal = container.innerHTML
            localStorage.setItem('storedItems', storeLocal);
            saveButton.innerHTML = 'Save';

        },
        editObj: editObj


    }



});
