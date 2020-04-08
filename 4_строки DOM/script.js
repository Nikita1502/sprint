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
            arrNames.forEach(function(item){
                var div = document.createElement('div');
                div.innerHTML = item.name + ' ' + item.lastname;
                document.getElementById('names').append(div);
            })
        }
        // console.log(arrNames);
        
        // var div = document.createElement('div');
        // div.innerHTML = fullName;
        // document.getElementById('names').append(div);
        

    } else {
        alert('Имя и фамилия должны содержать хотя бы по две буквы');
    }
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
