var arrNames = [];
function enter(){
    var name = document.getElementById("name").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    if (name.length >= 2 && lastName.length >= 2) {
        name = name[0].toUpperCase() + name.slice(1).toLowerCase();
        lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase(); 

        fullName = name + ' ' + lastName;
        if (fullName == 'Андрей Хавкунов') {
            alert('О, Дюшик? Здарова!');
        }    

        var names = {};
        names.name = name;
        names.lastname = lastName;
    
        arrNames.push(names);
        document.getElementById('names').innerHTML = '';
        if (arrNames.length > 3) {
            // arrNames.forEach(function(item, i) {
            //     var outerdiv = document.createElement('div');
            //     var deletebtn = document.createElement('button');
            //     document.getElementById('names').append(outerdiv); 
            //     outerdiv.classList.add('outerdiv');
            //     outerdiv.append(deletebtn); //добавляем кнопку в outerdiv
            //     deletebtn.classList.add('deleteBtn'); // кнопкам для удаления присваиваем класс
            //     deletebtn.append('x'); //крестики на кнопках
            //     var namediv = document.createElement('div'), // объявлем дивы для имен
            //         lastnamediv = document.createElement('div'); // объявлем дивы для фамилий
            //     namediv.innerHTML = item.name;
            //     lastnamediv.innerHTML = item.lastname;

            //     deletebtn.onclick = function(){
            //         deleteCard(i);
            //     }

            //     outerdiv.append(namediv);
            //     outerdiv.append(lastnamediv);
            // })
            render();
        }
        // console.log(arrNames);
        
        // var div = document.createElement('div');
        // div.innerHTML = fullName;
        // document.getElementById('names').append(div);
        

    } else {
        alert('Имя и фамилия должны содержать хотя бы по две буквы');
    }
}
function render(){
    document.getElementById('names').innerHTML = ' ';
    arrNames.forEach(function(item, i) {
        var outerdiv = document.createElement('div');
        var deletebtn = document.createElement('button');
        document.getElementById('names').append(outerdiv); 
        outerdiv.classList.add('outerdiv');
        
        var namediv = document.createElement('div'), // объявлем дивы для имен
            lastnamediv = document.createElement('div'); // объявлем дивы для фамилий
        namediv.innerHTML = item.name;
        lastnamediv.innerHTML = item.lastname;

        deletebtn.onclick = function(){
            deleteCard(i);
        }        
        outerdiv.append(namediv);
        outerdiv.append(lastnamediv);

        outerdiv.append(deletebtn); //добавляем кнопку в outerdiv
        deletebtn.classList.add('deleteBtn'); // кнопкам для удаления присваиваем класс
        deletebtn.append('x'); //крестики на кнопках
    })
}

function deleteCard(num){ 
    arrNames = arrNames.filter(function(item, i){
        return i!=num;
    })
    render();
}

document.getElementById("enterBtn").onclick = enter;



// var outerdiv = document.createElement('div');
//         document.getElementById('names').append(outerdiv);

//         outerdiv.classList.add('outerdiv');  //outerdiv = lastdiv[lastdiv.length-1].
//        div.innerHTML = fullName;
//        innerdiv1 = document.
//         .append(innerdiv1);
//         document.getElementById('names').append(innerdiv2);
//         } else alert('Имя и фамилия должны содержать хотя бы по две буквы');
// }
