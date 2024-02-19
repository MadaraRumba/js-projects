'use strict';
//!Note - you have to use "for" loop in every task.

/*
////////////////////////////////////////////////////////// Task #1
// Ask user to input positive arbitrary whole number and print Fibonacci sequence till that number. For example, if user inputs number 10 the output should be: 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34. Hint: use for loop and multiple variables to remember sum and previous values
let input;

do {
    input = prompt('Please enter a positive number.');
    input = parseInt(input);
    if (isNaN(input) || input < 0) {
        alert('The input has to be a positive number.');
    } else {
        break;
    }
} while (true);

let number1 = 0;
let number2 = 1;
let number;

number = number1 + number2;

let sequence = '';

for (let i = 0; i <= input; i++) {
    sequence += number1 + ' + ';
    number = number1 + number2;
    number1 = number2;
    number2 = number;
}

sequence = sequence.slice(0, -3);
console.log(sequence);

 */

/*
////////////////////////////////////////////////////////// Task #2
// Similar as in first task, but also create new array and save all the fibonacci numbers in array.

let input;

do {
    input = prompt('Please enter a positive number.');
    input = parseInt(input);
    if (isNaN(input) || input < 0) {
        alert('The input has to be a positive number.');
    } else {
        break;
    }
} while (true);

let number1 = 0;
let number2 = 1;
let number;

number = number1 + number2;

let sequence = [];

for (let i = 0; i <= input; i++) {
    sequence.push(number1);
    number = number1 + number2;
    number1 = number2;
    number2 = number;
}

console.log(sequence);
*/
/*
////////////////////////////////////////////////////////// Task #3
// Implement a method (printFibonacci) which accepts single argument (int limit) and performs the same operations as in task 1. Hint: basically, move the same code you wrote in task 1 inside a method (except the user input part)

let input;

do {
    input = prompt('Please enter a positive number.');
    input = parseInt(input);
    if (isNaN(input) || input < 0) {
        alert('The input has to be a positive number.');
    } else {
        break;
    }
} while (true);

let number1 = 0;
let number2 = 1;
let number;

number = number1 + number2;

let sequence = [];

function printFibonacci(input) {
    for (let i = 0; i <= input; i++) {
        sequence.push(number1);
        number = number1 + number2;
        number1 = number2;
        number2 = number;
    }
    return console.log(sequence);
}

printFibonacci(input);
*/

/*
////////////////////////////////////////////////////////// Task #4
// Define an array with arbitrary whole numbers. Write a program that finds the second-highest number in array.

let numbers = [1, 2, 3, 4];
console.log(numbers);

function getSecondHighest(array) {
    numbers.reverse(array);
    return array[1];
}

console.log(`The second-highest number is ${getSecondHighest(numbers)}`);
*/