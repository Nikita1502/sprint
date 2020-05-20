var notes = [];
var filtredNotes = [];

function Note(title, date, description){
    this.id = this.count;
    this.title = title;
    this.date = date;
    this.description = description;
    this.__proto__.count ++;
}
Note.prototype.count = 0;

Note.prototype.remove = function(){
    var noteId = this.id;

    notes = notes.filter(function(item){
        return item.id !== noteId;
    });
}

function addNote(){
    var titleInput = document.getElementById('title');
    // var dateInput = document.getElementById('date');
    var descriptionInput = document.getElementById('description');

    var date = new Date();
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd; 
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm; 
    currentDate = dd + '.' + mm + '.' + date.getFullYear();

    var newNote = new Note(titleInput.value, currentDate, descriptionInput.value);
    notes.push(newNote);

    var main             = document.querySelector('main');
    var note             = document.createElement('div');
    var title            = document.createElement('div');
    var date             = document.createElement('div');
    var description      = document.createElement('div');
    var deleteNoteButton = document.createElement('button');

    note.classList.add('note'); 
    title.classList.add('title'); 
    date.classList.add('date'); 
    description.classList.add('description'); 
    deleteNoteButton.classList.add('deleteNoteButton');

    main.append(note);
    note.append(title);
    note.append(date);
    note.append(description);
    note.append(deleteNoteButton);

    // deleteNoteButton.innerHTML = "X";

    title.innerHTML = newNote.title;
    date.innerHTML = newNote.date;
    description.innerHTML = newNote.description;

    deleteNoteButton.onclick = function(){
        note.remove();
        newNote.remove();
    }
}

var filter = function(){
    var search = document.getElementById('search');
    filtredNotes = notes.filter(function(item){
        var ifTitle = item.title.toUpperCase().includes(search.value.toUpperCase());
        var ifDescription = item.description.toUpperCase().includes(search.value.toUpperCase());

        return ifTitle || ifDescription;
    });
}
var printFiltred = function(){
    document.querySelector('main').innerHTML = '';
    filtredNotes.forEach(function(item){
        var main             = document.querySelector('main');
        var note             = document.createElement('div');
        var title            = document.createElement('div');
        var date             = document.createElement('div');
        var description      = document.createElement('div');
        var deleteNoteButton = document.createElement('button');

        note.classList.add('note'); 
        title.classList.add('title'); 
        date.classList.add('date'); 
        description.classList.add('description'); 
        deleteNoteButton.classList.add('deleteNoteButton');

        main.append(note);
        note.append(title);
        note.append(date);
        note.append(description);
        note.append(deleteNoteButton);

        // deleteNoteButton.innerHTML = "X";  
        
        title.innerHTML = item.title;
        date.innerHTML = item.date;
        description.innerHTML = item.description;

        deleteNoteButton.onclick = function(){
        note.remove();
        item.remove();
        }
    });
}

document.getElementById('search').onkeyup = function(){
    filter();
    printFiltred();
} 

enterBtn.onclick = function(){
    addNote();
}

