var text = 'ggg hhh ggg kjwnefjn oiqndin ggg hhh kjwnefjn ggg kjwnefjn';

var analysis = function(text){
    var textArr = text.split(' ');
    var wordStat = {};
    textArr.forEach(function(item){
        if (wordStat[item] != undefined)
            ++wordStat[item];
        else
            wordStat[item] = 1;
        // wordStat[item] = wordStat[item] + 1 || 1;
    })

    // Object.keys(wordStat).forEach(function(item){
    //     console.log(item + ': ' + wordStat[item]);
    // })

    // console.log('В тексте ' + textArr.length + ' слов.');

    var sort = [];
 
    Object.keys(wordStat).forEach(function(item){
        sort.push([item, wordStat[item]]);
    })

    sort.sort(function(a, b) {
        return b[1] - a[1];
    });

    wordStat.top3 = [];
    
    for (var i = 0; i < 3; i++) {
        wordStat.top3.push(sort[i][0]);
    }
    return wordStat;
}
console.log(analysis(text));

