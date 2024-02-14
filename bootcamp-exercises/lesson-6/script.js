'use strict';
/*
////////////////////////////////Task #1
//Ask user to input positive whole number and print the sum for all numbers from 1 to user's input number. If user enters negative number, print message "Please enter positive number!" hint: use while loop, int sum (sum += i)

function isNumber(value) {
    let number = parseInt(value);
    return !isNaN(number);
};

let input;

do {
    input = prompt('Please enter a positive, whole number');

    if (isNumber(input) && input > 0) {
        break;
    } else {
        alert('This is not a positive number.')
    }
} while (true);

console.log(`You've selected ${input}`);

// let sum = 0;
// let currentNumber = 1
//
// do {
//     sum += currentNumber;
//     currentNumber++;
// } while (currentNumber <= input);

function getSum(input) {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
        sum += i;
    }
    return sum;
}

getSum(input);
console.log(`The sum of numbers from 1 to ${input} is ${getSum(input)}`);
*/


////////////////////////////////Task #2
//Ask user to input two whole numbers (first and second) and print out all numbers between first and second (including first and second number). If first number is greater than second, then print message "First number has to be less than second." and exit program.
// hint: you will need Scanner (for user input), while loop (to print out numbers). To exit program, you have to use return; statement. Example:
//          if (...) {
//              return; //this line stops program execution.
//          }


function getNumbersFromUser() {
    do {
        let input1 = prompt('Please enter a number');
        let input2 = prompt('Please enter greater number');

        input1 = parseInt(input1);
        input2 = parseInt(input2)

        if (isNaN(input1) || isNaN(input2)) {
            alert('Input has to be a number.')
            continue;
        }

        if (input1 >= input2) {
            alert('First number has to be less than second');
            return;
        } else {
            return {
                from: input1,
                to: input2
            };
        }
    } while (true);
}

function printNumbersInBetween(numbers) {
    let i = numbers.from + 1;
    while (i < numbers.to) {
        console.log(`${i}`);
        i++;
    }
}

let numbers = getNumbersFromUser();
if (numbers) {
    printNumbersInBetween(numbers);
}


