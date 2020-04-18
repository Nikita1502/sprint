var spaceX = 700;
var spaceY = 500;
var spaceid = document.getElementById('space');
var score = 0;

var viewscore = document.createElement('div');
spaceid.append(viewscore);  
viewscore.setAttribute('id', 'viewscore');
viewscore.innerHTML = 'Счет: ' + score;

spaceid.style.width = spaceX + 'px';
spaceid.style.height = spaceY + 'px';
// var spaceX = window.getComputedStyle(document.getElementById('space')).width;
// console.log(spaceX);

var timer = setInterval(function(){   

    var figure = document.createElement('div'); 
    spaceid.append(figure); 
    figure.classList.add('figure', 'circle');

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

    setTimeout(function(){
        var randX = Math.floor(Math.random()*(spaceX - 50));
        var randY = Math.floor(Math.random()*(spaceY - 50));
        figure.style.left = randX + 'px';
        figure.style.top = randY + 'px';
        // figure.classList.add('stoped');
    }, 1000)
    setTimeout(function(){ 
        var i = 3;       
        figure.innerHTML = i;
        // figure.classList.add('stoped');
        
        var countDown = setInterval(function(){
            figure.innerHTML = --i;
            if (i == 0) {
                clearTimeout(timer);
                spaceid.innerHTML = '';
                var endGame = document.createElement('div'); 
                spaceid.append(endGame);
                endGame.setAttribute('id', 'endGame');
                endGame.innerHTML = 'GAME OVER';
            }
            figure.onclick = function() {
                this.remove();
                clearTimeout(countDown);
                score++;
                viewscore.innerHTML = 'Счет: ' + score;
            }
        }, 1000);
        console.log(score);            

    }, 3800)
    

    // figure.onmouseover = function() {
    //     this.classList.add('square');
    //     this.classList.remove('circle');
    // }

    // figure.onclick = function() {
    //     this.remove();
    //     clearTimeout(countDown);
    //     score++;
    //     // clearTimeout(timer); // завершает
    // }

    
    
}, 3000)