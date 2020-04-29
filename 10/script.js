var notes = [];
function noteConstructor(title, date, description){
    this.title = title;
    this.date = date;
    this.description = description;
}
function addNote(){
    var title = document.getElementById('title');
    var date = document.getElementById('date');
    var description = document.getElementById('description');
    var note = new noteConstructor(title.value, date.value, description.value);
    notes.push(note);
}
function drawNotes(){
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

    deleteNoteButton.innerHTML = "X";
    Object.keys(note).forEach(function(item, i){
        title[i].innerHTML = notes[i].title;
        date[i].innerHTML = notes[i].date;
        description[i].innerHTML = notes[i].description;
    });

    deleteNoteButton.onclick = function(){
        note.remove();
        // notes.splice(1, 1);
        console.log('1');
        // notes = notes.filter(function(item, index){
        //     return index !== personIndex;
        // })
    }

}
enterBtn.onclick = function(){
    addNote();
    drawNotes();

}