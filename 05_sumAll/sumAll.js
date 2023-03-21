const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0){
        return("ERROR");
    }

    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return('ERROR');
    }

    let start = num1, end = num2, sum = 0;

    if (num1 > num2){
        start = num2;
        end = num1;
    }
    

    for (let i = start; i <= end; i++){
        sum += i;
        console.log(sum);
    }

    
    return sum;
};

console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
