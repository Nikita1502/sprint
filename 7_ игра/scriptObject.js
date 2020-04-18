var spaceX = 700;
var spaceY = 500;
var spaceid = document.getElementById('space');
var score = 0;
var circles = [];
var i = 0;
spaceid.style.width = spaceX + 'px';
spaceid.style.height = spaceY + 'px';

var timer = setInterval(function(){   

    function Circle(x, y){  
        this.posX = x;
        this.posY = y;
        this.targetX = tx;
        this.targetY = ty;  
    } 
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
    var tx = Math.floor(Math.random()*(spaceX - 50));
    var ty = Math.floor(Math.random()*(spaceY - 50));
    var circle = new Circle(x, y, tx, ty)
    circles.push(circle);

    var figure = document.createElement('div'); 
    spaceid.append(figure); 
    figure.classList.add('figure', 'circle');

    figure.style.left = circles[i].posX + 'px';
    figure.style.top = circles[i].posY + 'px';
    
    setTimeout(function(){
        figure.style.left = circles[i].targetX + 'px';
        figure.style.top = circles[i].targetY + 'px';
        // circles[i].status = 'stoped';
        console.log(circles[i])
        i++;
    }, 1000)
   
    // console.log(circles[i])
    

}, 2000)