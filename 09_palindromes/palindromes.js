const palindromes = function (phrase) {
    let i = 0, j = phrase.length -1;
    outer: while (i < j){
        while ("!?.,'\":; ".includes(phrase[i])){
            i++;
            if (i >= j){
                continue outer;
            }
        }
        while ("!?.,'\":; ".includes(phrase[j])){ // includes is javascript method to check if string includes substring
            j--;
            if (i >= j){
                continue outer;
            }
        }
        if (phrase[i].toLowerCase() != phrase[j].toLowerCase()){
            return false
    }
    i++;
    j--;
            
    }
    return true;
};

console.log(palindromes('ZZZZ car, a man, a maracaz.'));

// Do not edit below this line
module.exports = palindromes;
