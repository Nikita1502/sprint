var scores = [60, 50, 60, 58, 54, 54,     
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44],
    highest = scores[0],
    hiArr = [];

scores.forEach(function(item, i){
    console.log("Bubble solution #" + i + " score: " + item);
    if (item > highest) highest = item;
});

scores.forEach(function(item, i){    
    if (item == highest) hiArr.push('#' + i);
});

console.log('Bubbles tests: ' + scores.length);
console.log('Highest bubble score: ' + highest);
console.log('Solutions with highest score: ' + hiArr);

// Элементы, которые не больше 60
var under60 = scores.filter(function(number) {
    return number <= 60;
  });
console.log(under60);

// Массив, в котором все элементы отрицательные
var negative = scores.map(function(number) {
    return number * -1;
  });
console.log(negative);

// Сортированный по убыванию массив, хз как это работает
 var sorted = scores;
 function compareNumeric(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
  };
  sorted.sort(compareNumeric);
  console.log(sorted);


// var nums = scores.map(function(s) {
//     return s * 1.5;
//   });
// console.log(nums);

//   var over50 = scores.filter(function(number) {
//     return number > 50;
//   });
// console.log(over50);

//  var isOver10 = scores.every(function(number){
//      return number > 10;
//  });
//  console.log(isOver10);

//  var isOver50 = scores.some(function(number){
//     return number > 500;
// });
// console.log(isOver50);