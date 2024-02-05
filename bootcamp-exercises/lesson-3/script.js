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
let number = prompt('Please enter a number from 1 to 7', '5')

let realNumber = parseInt(number);

switch(realNumber){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tueasday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('There is no such day, please enter numbers 1 - 7!');
}
*/


//Lesson 4#, Task #2
//Write a program that asks user to input three numbers and prints out the greatest number.


// with if/else
/*
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

function printTheGreatestNumber(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        console.log(`The greatest number is ${number1}`);
    } else if (number2 > number1 && number2 > number3) {
        console.log(`The greatest number is ${number2}`);
    } else if (number3 > number1 && number3 > number2) {
        console.log(`The greatest number is ${number3}`);
    } else {
        console.log(`All three numbers are equal = ${number1}`);
    }
};
printTheGreatestNumber(number1, number2, number3);
*/

/*
//array and sorting
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
/*
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
    } else if (num1 === num2 && num2 === num3) {
        console.log('Numbers are equal');
    } else {
        console.log('Well, maybe some other time.');
    }
}

console.log(isSorted(num1, num2, num3));
*/


/*
Lesson #4 Task #5
Write program that outputs text "Male", if user inputs "M", or "Female" if user inputs "F"
*/
/*
let gender = prompt('Please select gender', 'F or M');

switch(gender){
    case 'F':
        console.log('Female');
        break;
    case 'M':
        console.log('Male');
        break;
    default:
        console.log('Please select F or M');
};
*/


/*
Lesson #4 Task #6
Write a program that prints out numbers from 1 to 10:
    example:
        output: 1 2 3 4 5 6 7 8 9 10
    hint: use while loop
 */
/*
let number = 1;
while (number < 11) {
    console.log(number);
    number++;
}
*/

/*
Lesson #4 Task #7
Write a program that prints out numbers from 10 to -10:
    example:
        output: 10 9 8 ... -10
    hint: use while loop
 */

/*
let number = 10;
while (number > -11) {
    console.log(number);
    number--;
}
*/


/*
Lesson #4 Task #8
Write a program that prints out numbers from 0 to 10 (except 3 and 6)
 */
/*
let number = 0;
while (number < 11) {
    if (number !== 3 && number !== 6) {
        console.log(number);
    }
    number++;
}
*/


/*
Lesson #4 Task #9
Write a program that prints out all even numbers from 2 to 30
    example:
        output: 2 4 6 ... 30
    (hint, use while loop. also you can check if number is even like this: x % 2 == 0)
 */

/*
let number = 2;
while(number < 31){
    if(number % 2 ===0){
        console.log(number);
    }
    number++;
}
*/


/*
Lesson #4 Task #10.1
Implement method that accepts two string arguments and returns the result.
 */
/*
function isString(string) {
    let input = parseInt(string);
    return isNaN(input);
}

let array = ['input1', 'input2'];

do {
    array[0] = prompt('Please enter your name');
    array[1] = prompt('Please enter your surname');
    if (isString(array[0]) && isString(array[1])) {
        break;
    } else {
        alert('Make sure your name and surname are correct and please try again.');
    }
} while (true);

console.log(array[0], array[1]);
*/


/*
// Task #10.2
// Implement method that accepts three number arguments and returns the average of those three numbers.

function isNumber(number) {
    let input = parseInt(number);
    return !isNaN(input);
}

let num1;
let num2;
let num3;

do {
    num1 = prompt('Please enter a number');
    num2 = prompt('Please enter another number');
    num3 = prompt('Just one more');
    if (isNumber(num1) && isNumber(num2) && isNumber(num3)) {
        break;
    } else {
        alert('Please make sure that all inputs are numbers and try again');
    }
} while (true);

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

function getAverage(input1, input2, input3) {
    return (input1 + input2 + input3) / 3;
}

console.log(getAverage(num1, num2, num3));
*/

/*
// Task #10.3
// Implement method that accepts two numbers and returns true (boolean data type) if first argument is greater than second or false if the first argument is equal or less than second

function isNumber(number) {
    let input = parseInt(number);
    return !isNaN(input);
}

let num1;
let num2;

do {
    num1 = prompt('Please enter a number');
    num2 = prompt('Please enter a smaller number');
    if (isNumber(num1) && isNumber(num2)) {
        break;
    } else {
        alert('Both inputs has to be numbers! Please try again.');
    }
} while (true);

num1 = parseInt(num1);
num2 = parseInt(num2);

function isFirstNumberGreater(input1, input2) {
  return input1 > input2 ? 'true' : 'false';
}

console.log(isFirstNumberGreater(num1, num2));

let firstIsGreater = isFirstNumberGreater(num1, num2);
*/