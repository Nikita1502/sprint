var spaceX = 700;
var spaceY = 500;

document.getElementById('space').style.width = spaceX + 'px';
document.getElementById('space').style.height = spaceY + 'px';
// var spaceX = window.getComputedStyle(document.getElementById('space')).width;
// console.log(spaceX);

var timer = setInterval(function(){
    

    figure = document.createElement('div'); 
    document.getElementById('space').append(figure); 
    figure.setAttribute('class', 'figure');
    figure.classList.add('circle');

    // var x = spaceX/2-50/2;
    // var y = spaceY/2-50/2;
    var x;
    var y;

    var oneOrZero = Math.round(Math.random());
    if (oneOrZero == 0) {
        x = -50 + Math.round(Math.random())*(spaceX + 50);
        y = -50 + Math.floor(Math.random()* (spaceY + 50));
    } else {
        x = -50 + Math.floor(Math.random()* (spaceX + 50));
        y = -50 + Math.round(Math.random())* (spaceY + 50);
    }
    
    figure.style.left = x + 'px';
    figure.style.top = y + 'px';

    figure.style.width = '100px';

    

    figure.onmouseover = function() {
        this.classList.add('square');
        this.classList.remove('circle');
    }

    figure.onclick = function() {
        this.remove();  
    }
    
}, 1000)
