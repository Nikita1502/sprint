Date.prototype.isToday = function() {
    var today = new Date();
    return ( this.getFullYear()==today.getFullYear() ) && 
           ( this.getMonth()==today.getMonth() ) && 
           ( this.getDate()==today.getDate() );
}

var day = new Date(2020, 3, 22);

console.log(day.isToday());
