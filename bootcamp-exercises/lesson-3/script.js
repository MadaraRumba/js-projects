'use strict';
// Lesson #3, Task #4
/*
function isNumber(value){
    let number = parseInt(value);
    return !isNaN(number);
};

let numberA;
let numberB;
console.log("asdasd");
do {
    numberA = prompt("Please enter a number", 2);
    numberB = prompt("Please enter a number", 2);
    if (isNumber(numberA) && isNumber(numberB)) {
        break;
    } else {
        alert('Both inputs have to be numbers! Please enter again.')
    }
} while (true);

function result(numberA, numberB) {
    return numberA > numberB ? `${numberA} is greater than ${numberB}` : numberA < numberB ? `${numberB} is greater than ${numberA}` : `${numberA} and ${numberB} are equal`;
};
console.log(result(numberA, numberB));
*/

//Lesson #4, Task#1
// Write a program that asks user to input number and
// prints out the name of the corresponding day.
//     If user inputs any other number than 1 - 7, then
// print out "There is no such day, please enter numbers 1 - 7!"
// example 1:
// Input: 1
// Output: Monday

/*
const number = prompt('Please enter a number from 1 to 7', '5')

switch(number){
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tueasday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('There is no such day, please enter numbers 1 - 7!');
}
*/

//Lesson 4#, Task #2
//Write a program that asks user to input three numbers and prints out the greatest number.

/*
// with if/else
function isNumber(value) {
    let number = parseInt(value);
    return !isNaN(number);
};

let number1;
let number2;
let number3;

do {
    number1 = prompt('Please enter number #1');
    number2 = prompt('Please enter number #2');
    number3 = prompt('Please enter number #3');
    if (isNumber(number1) && isNumber(number2) && isNumber(number3)) {
        break;
    } else {
        alert('All inputs have to be numbers! Please enter again.');
    }
} while (true);

number1 = parseInt(number1);
number2 = parseInt(number2);
number3 = parseInt(number3);

console.log(number1, number2, number3);

function theGreatest(number1, number2, number3) {
    if ((number1) > (number2) && (number1) > (number3)) {
        console.log(`The greatest number is ${number1}`);
    } else if ((number2) > (number1) && (number2) > (number3)) {
        console.log(`The greatest number is ${number2}`);
    } else if ((number3) > (number1) && (number3) > (number2)) {
        console.log(`The greatest number is ${number3}`);
    } else {
        console.log(`All three numbers are equal = ${number1}`);
    }
};

console.log(theGreatest(number1, number2, number3));
*/

/*h array and sorting
function isNumber(value) {
    let number = parseInt(value);
    return !isNaN(number);
};

let number1;
let number2;
let number3;

do {
    number1 = prompt('Please enter number #1');
    number2 = prompt('Please enter number #2');
    number3 = prompt('Please enter number #3');
    if (isNumber(number1) && isNumber(number2) && isNumber(number3)) {
        break;
    } else {
        alert('All inputs have to be numbers! Please enter again.');
    }
} while (true);
let numbers = [number1, number2, number3];

console.log(numbers);
numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers[0]);
*/

//Lesson 4#, Task #3
/*
Write  program that asks user to input three numbers and checks if they
are in ascending (increasing) or descending (decreasing) order.
If all of the numbers are equal, then print out text - "numbers are equal!"
If none of the previous conditions is true, then print out text - "well, maybe some other time."
*/

function isNumber(value) {
    let number = parseInt(value);
    return !isNaN(number);
}

let num1;
let num2;
let num3;

do {
    num1 = prompt('Please enter number #1');
    num2 = prompt('Please enter number #2');
    num3 = prompt('Please enter number #3');
    if (isNumber(num1) && isNumber(num2) && isNumber(num3)) {
        break;
    } else {
        alert('All inputs have to be numbers! Please try again.');
    }
} while (true);

console.log(num1, num2, num3);

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

function isSorted(num1, num2, num3) {
    if (num1 > num2 && num2 > num3) {
        console.log('Numbers are in ascending order');
    } else if (num3 > num2 && num2 > num1) {
        console.log('Numbers are in descending order');
    }else if (num1 === num2 && num2 === num3) {
            console.log('Numbers are equal');
    } else {
            console.log('Well, maybe some other time.');
    }
}
console.log(isSorted(num1, num2, num3));
