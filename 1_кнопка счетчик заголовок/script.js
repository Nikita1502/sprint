let num = 0;

// любое событие, в частности onclick должно быть функцией
document.getElementById('counter').onclick = function() {
    setTimeout(function(){
    num++;
    document.querySelector("h1").innerHTML = num;
}, 2000)
}
