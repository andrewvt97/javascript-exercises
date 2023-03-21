const removeFromArray = function(listOfNum, ...args) {

   
   
    for (let i = listOfNum.length -1 ; i >= 0; i--){
        console.log(listOfNum[i]);
        if (args.includes(listOfNum[i])){
            console.log(true);
            listOfNum.splice(i, 1);
        }
    }

    return listOfNum;
    
};

removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
