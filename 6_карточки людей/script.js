fetch('https://randomuser.me/api/?results=100&').then(res => res.json()).then(function(res){    

    var addPersonsCard = function(person, personIndex) {
        var personsList       = document.getElementById('names'); 
        var pictureDiv        = document.createElement('div');  
        var personCard        = document.createElement('div');
        var personNameDiv     = document.createElement('div');
        var personLastNameDiv = document.createElement('div');  
        var ageDiv            = document.createElement('div'); 
        var genderDiv         = document.createElement('div'); 
        var deleteButton      = document.createElement('button');
        
        personsList.append(personCard);
        personCard.append(pictureDiv); 
        personCard.append(personNameDiv); 
        personCard.append(personLastNameDiv);
        personCard.append(genderDiv);
        personCard.append(deleteButton);

        personCard.classList.add('personCard');        
        pictureDiv.classList.add('pictureDiv');
        personNameDiv.classList.add('personNameDiv');
        personLastNameDiv.classList.add('personLastNameDiv');
        ageDiv.classList.add('ageDiv');
        genderDiv.classList.add('genderDiv');
        deleteButton.classList.add('deleteButton');

        pictureDiv.innerHTML = '<img src="' + person.picture.medium + '" /  >'; 
        personNameDiv.innerHTML = person.name.first;    
        personLastNameDiv.innerHTML = person.name.last;
        ageDiv.innerHTML = person.dob.age + ' лет';
        genderDiv.innerHTML = person.gender;        
        deleteButton.innerHTML = "X";

        deleteButton.onclick   = function(){
                person = person.filter(function(item, index){
                return index !== personIndex;
            })
            // refreshList();
            console.log('edwe');
        } 
    };    
    res.results.forEach(addPersonsCard); 
})
