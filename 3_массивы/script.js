var scores = [60, 50, 60, 58, 54, 54,     
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44],
    highest = scores[0],
    hiArr = [];

scores.forEach(function(item, i){
    console.log("Bubble solution #" + i + " score: " + scores[i]);
    if (scores[i] > highest) highest = scores[i];
});

scores.forEach(function(item, i){    
    if (scores[i] == highest) hiArr.push('#' + i);
});

console.log('Bubbles tests: ' + scores.length);
console.log('Highest bubble score: ' + highest);
console.log('Solutions with highest score: ' + hiArr);
