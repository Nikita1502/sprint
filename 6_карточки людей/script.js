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
    var genderChoice = document.getElementById('genderChoice');

    var filter = function(){
        filtredArr = arr.filter(function(item){
            var isGenderOk = (item.gender == genderChoice.value) || (genderChoice.value == 'unchosen');
            var isName = item.name.toUpperCase().includes(searcher.value.toUpperCase());
            var isLastname = item.lastName.toUpperCase().includes(searcher.value.toUpperCase());
            var isNameOk = (isName == true) || (isLastname == true);

            return isNameOk && isGenderOk;
        });

    refresh();

    }
    
    searcher.oninput = filter;
    genderChoice.onchange = filter;
})
