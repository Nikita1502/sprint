(function (){
    var arrNames      = [];
    var nameField     = document.getElementById("name");
    var lastNameField = document.getElementById("lastName");
    var personsList   = document.getElementById('names');

    var addPersonToList = function(){
        name     = nameField.value[0].toUpperCase() + nameField.value.slice(1).toLowerCase();
        lastName = lastNameField.value[0].toUpperCase() + lastNameField.value.slice(1).toLowerCase(); 

        arrNames.push({
            name: name,
            lastName: lastName
        });
    }

    var addPersonsCard = function(person, personIndex){
        var personCard         = document.createElement('div');
        var personNameDiv      = document.createElement('div');
        var personLastNameDiv  = document.createElement('div');
        var deleteButton       = document.createElement('button')
        deleteButton.innerHTML = "X";
        deleteButton.onclick   = function(){
                arrNames = arrNames.filter(function(item, index){
                return index !== personIndex;
            })
            refreshList();
        }

        personNameDiv.innerHTML = person.name
        personLastNameDiv.innerHTML = person.lastName

        personCard.append(personNameDiv)
        personCard.append(personLastNameDiv)
        personCard.append(deleteButton)

        personsList.append(personCard);
    }

    var refreshList = function(){
        personsList.innerHTML = '';
        arrNames.forEach(addPersonsCard)
    }

    var ifNamesOk = function(callback){
        var name = nameField.value.trim();
        var lastName = lastNameField.value.trim();
        
        if (name.length >= 2 && lastName.length >= 2) {
            callback();
        } else {
            alert('Имя и фамилия должны содержать хотя бы по две буквы');
        }
    }

    var addPerson = function(){
        ifNamesOk(function(){
            addPersonToList();
            refreshList();
        })
    }

    document.getElementById("enterBtn").onclick = addPerson;

})()
