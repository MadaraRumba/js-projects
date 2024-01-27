'use strict';

//FUNCTIONS
// function logger(){
//     console.log('My name is Jonas');
// }
//  logger();
//
// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
//
// const appleJuice = fruitProcessor(3, 0); // storing  result in a variable
// console.log(appleJuice);
// // console.log(fruitProcessor(3, 0)); // logging it directly
//
// const appleOrangeJuice = fruitProces sor(2, 4);
// console.log(appleOrangeJuice);

// FUNCTION DECLARATION
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
//const age2 = calcAge2(1991);
// console.log(age2);

// ARROW FUNCTIONS
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);
//
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
//
// console.log(yearsUntilRetirement(1991, 'Madara'));
// console.log(yearsUntilRetirement(1980, 'Bob'));


// FUNCTIONS CALLING FUNCTIONS
// function cutFruitPieces(fruit){
//     return fruit * 4;
// };
//
// function fruitProcessor(apples, oranges) {
//     const applePieces= cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// };
// console.log(fruitProcessor(2, 3));

/*
//FUNCTIONS REVIEW
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
         console.log(`${firstName} has already retired.`);
        return -1;
    }

    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/


/////////////////////////////////////// ARRAYS
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array (1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Doe', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/
/*
//ARRAY METHODS
const friends = ['Michael', 'Steven', 'Peter'];

// add
const newLenght = friends.push('Jay');

console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

//removes
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

// checks index of an element and if there even is such element in an array
console.log(friends.indexOf('Steven'));
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
*/