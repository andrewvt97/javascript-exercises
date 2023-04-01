const findTheOldest = function(array) {
    const sortedAge = array.sort((a,b) => {
   
        if (a.yearOfDeath === undefined){
            deathA = (new Date()).getFullYear();
        }
        else{
            deathA = a.yearOfDeath
        }
        if (b.yearOfDeath === undefined){
            deathB = (new Date()).getFullYear();
            console.log(deathB);
        }
        else{
            deathB = b.yearOfDeath
        }
        const lastPerson = deathA - a.yearOfBirth;
        const nextPerson = deathB - b.yearOfBirth;

        if (lastPerson > nextPerson){
            return -1;
        }
        else{
            return 1;
        }
    });
    return sortedAge[0];
};

//   const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1066,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]
// console.table(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
