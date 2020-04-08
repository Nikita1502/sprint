function enter(){
    name = document.getElementById("name").value;
    lastName = document.getElementById("lastName").value;
    if (name.length >= 2 && lastName.length >= 2){
    name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase(); 
    fullName = name + ' ' + lastName;
    if (fullName == 'Андрей Хавкунов') {
        alert('О, Дюшик? Здарова!');
    }    
    var li = document.createElement('li');
    li.textContent = fullName;

    document.querySelector("ul").append(li);
    } else alert('Имя и фамилия должны содержать хотя бы по две буквы');
}
document.getElementById("enterBtn").onclick = enter;


