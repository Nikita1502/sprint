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
    for (var key in wordStat){
        console.log(key + ': ' + wordStat[key]);
    }
    console.log('В тексте ' + textArr.length + ' слов.');

    var sort = [];
    for (var word in wordStat){
        sort.push([word, wordStat[word]]);
    }
    sort.sort(function(a, b) {
        return b[1] - a[1];
    });

    for (var i = 0; i < 3; i++) {
        console.log('Место №' + (i+1) + ': '+ sort[i][0] + ' - ' + sort[i][1] + ' раз(а)')
    }    
}
console.log(analysis(text));

