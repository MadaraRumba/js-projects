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


///////////////////////////////////   OBJECTS    ////////////////////////////////////////
/*
const jonasArrat = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

*/
/*
// DOT VS. BRACKET NOTATION
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

 */
/*
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.');

console.log(interestedIn);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends.');
}


//adding properties to an object

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';

console.log(jonas);

 */

// Challenge
//'Jonas has 3 friends, and his best friend is Michael.'

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}.`);


///////////////////////////////////////////////////////// OBJ METHODS
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
};
console.log(jonas.calcAge(1991)); // dot notation
console.log(jonas['calcAge'](1991)); //brecket notation

*/

///////////////////////////////////////////////////// THIS keyword

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        console.log(this);
        return 2037 - this.birthYear;
    }
};
console.log(jonas.calcAge());
//with 'this' keyword there is no need passing in arguments when calling a function
*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};
console.log(jonas.calcAge()); // calculating the age once
console.log(jonas.age); // storing it in a variable and retrieving it
 */

/* Challenge
 Write a method getSummary, what would summarise data from jonas object.
'Jonas is a 46-year old teacher and has a/no driver's license'
 */

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(jonas.getSummary());
*/

////////////////////////////////////////////////   LOOPS
/*
for (let rep = 1; rep <=10; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}
 */

//////////////////////////// LOOPING ARRAYS, CONTINUE & BREAK
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// console.log(jonas[2]);
//...
// console.log(jonas[5]); - does not exist

/*
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]); // reading from jonas array

    // types[i] = typeof jonas[i]; // filling types array
    types.push(typeof jonas[i]); // filling types array
}
console.log(types);

 */
/*
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    // 2037 - years[i];
    ages.push(2037 - years[i]);
}
console.log(ages);
 */

/////////////////// continue and break
/*
console.log('--- only strings --- ')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas [i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- break with number --- ')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas [i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}
*/

////////////// LOOPING BACKWARDS AND LOOPS IN LOOPS
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}
*/
/*
for (let exercise = 1; exercise < 4; exercise++){
    console.log(`------Starting exercise ${exercise}`);

    for(let rep = 1; rep <6; rep++){
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
    }
}
*/

////////////////////////// WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }
/*
let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}

 */