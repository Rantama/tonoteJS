define(function() {
console.log('hello');

    return function (e) {
      e.preventDefault();
        itemForm.style.display='block';
        itemFormCount ++;
        if (itemFormCount > 0) {
            title_note.value = '';
            descriptionNote.value = '';

        }

    };

});
