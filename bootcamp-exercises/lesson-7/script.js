'use strict';

////////////////////////////////////////////// Task #1
/*
//print out numbers from 0 to 10 using for loop

for (let i = 0; i < 11; i++) {
    console.log(i);
}
 */
/*
////////////////////////////////////////////// Task #1.2
// print out all numbers from 13 to -3 using for loop

for (let i = 13; i > -4; i--) {
    console.log(i);
}
*/

/*
////////////////////////////////////////////// Task #2
let's print out sum of all numbers between 3 and 12 (use for loop)
let sum = 0;

for (let i = 3; i < 13; i++) {
    sum = sum + i;
    console.log(sum);
}
*/

/*
////////////////////////////////////////////// Task 2.1
// ask user to input two whole numbers. Print out sum of all numbers between first and second
//     number that user entered.

let sum = 0;

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

let numbers = getNumbersFromUser();

function getSumFromNumbersInBetween(numbers) {
    let sum = 0;
    for (let i = numbers.from; i <= numbers.to; i++) {
        // console.log(sum += i); // to show sub - sums
        sum += i
    }
    return sum;
}

if (numbers) {
    console.log(getSumFromNumbersInBetween(numbers));
}

 */
/*
////////////////////////////////////////////// Task #3
//Declare and initialize array with four arbitrary whole numbers. Print out all the numbers from array.

let numbers = [1, 2, 3, 4];
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

 */

/*
////////////////////////////////////////////// Task #3.1
// declare and initialize array with four arbitrary whole numbers. Print out every second number from array in reverse order.

let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

for (let i = numbers.length - 1; i > 0; i -= 2) {
    console.log(numbers[i - 1]);
}
 */