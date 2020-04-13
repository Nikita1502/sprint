var timer = setInterval(function(){
    circle = document.createElement('div'); 
    document.getElementById('space').append(circle); 
    circle.setAttribute('class', 'circle');

    var x  = Math.floor(Math.random() * (860 - 9)) + 9; 
    var y = Math.floor(Math.random() * (660 - 9)) + 9;

    circle.style.left = x + 'px';
    circle.style.top = y + 'px';

    circle.onmouseover = function() {
        this.setAttribute('class', 'square');
    }

    circle.onclick = function() {
        this.remove();  
    }
    
}, 1000)