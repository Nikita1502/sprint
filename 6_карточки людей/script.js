var arr;
var filtredArr;

fetch('https://randomuser.me/api/?results=100&').then(res => res.json()).then(function(res){ 

    arr = res.results.map(function(item){    
        return {
            picture: item.picture.medium,
            name: item.name.first,
            lastName: item.name.last,
            age: item.dob.age,
            gender: item.gender,
        }
    });

    arr = arr.filter(function(item, i){
        return ((item.age < 50) || (item.age > 100));
    });

    var addPersonsCard = function(person, personIndex) {
        
        var personsList       = document.getElementById('names'); 
        var picture           = document.createElement('img');  
        var personCard        = document.createElement('div');
        var personNameDiv     = document.createElement('div');
        var personLastNameDiv = document.createElement('div');  
        var ageDiv            = document.createElement('div'); 
        var genderDiv         = document.createElement('div'); 
        var deleteButton      = document.createElement('button');
        
        personsList.append(personCard);
        personCard.append(picture); 
        personCard.append(personNameDiv); 
        personCard.append(personLastNameDiv);
        personCard.append(genderDiv);
        personCard.append(ageDiv);
        personCard.append(deleteButton);

        personCard.classList.add('personCard');        
        picture.classList.add('picture');
        personNameDiv.classList.add('personNameDiv');
        personLastNameDiv.classList.add('personLastNameDiv');
        ageDiv.classList.add('ageDiv');
        genderDiv.classList.add('genderDiv');
        deleteButton.classList.add('deleteButton');

        picture.setAttribute('src', person.picture);
        personNameDiv.innerHTML = person.name;    
        personLastNameDiv.innerHTML = person.lastName;
        ageDiv.innerHTML = person.age + ' лет';
        genderDiv.innerHTML = person.gender;        
        deleteButton.innerHTML = "X";

        deleteButton.onclick = function(){
            personCard.remove();
        }
    };  

    var refresh = function(){
        var pc = document.getElementById('names');
        pc.innerHTML = '';
        filtredArr.forEach(addPersonsCard);
    }

    arr.forEach(addPersonsCard); 

    filtredArr = arr;

    var searcher = document.getElementById('searchName');
    searcher.oninput = function() {
        filtredArr = filtredArr.filter(function(item){
            var isName = item.name.includes(searcher.value);
            var isLastName = item.lastName.includes(searcher.value);
            return (isName == true) || (isLastName == true);
        });                
        refresh();
    }
    var genderChoice = document.getElementById('genderChoice');
    genderChoice.onchange = function() {
        filtredArr = arr.filter(function(item){
            return (item.gender == genderChoice.value) || (genderChoice.value == 'unchosen');
        })
        refresh();
    }
})
