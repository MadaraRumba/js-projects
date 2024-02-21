'use strict';
/*
//////////////////////////////////////// Task #12
//Implement a method "search" which has two parameters (array of whole numbers called "numbers" and a whole number called "number") and checks if array "numbers" contains "number" and if it does, then it returns the index of the number;
//     Here is example of how to use the method:
//         // in arrays we start counting indexes from 0.
//         // So number 3 has index 0, number 12 has index 1 and so forth
//         int[] numbers = {3, 12, 2};
//         int result = search(numbers, 12);
//         System.out.println(result); //this should print 1 (because number 12 has index 1)

let numbers = [];
for (let i = 0; i < 7; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}
console.log(numbers);

let number = 7;

function searchNumber(array, input) {
    if (array.indexOf(input) > 0) {
        return array.indexOf(input);
    } else {
        return `There is no number ${input} in this array`;
    }
}

console.log(searchNumber(numbers, number));
*/

/*
////////////////////////////////////// Task #13
//Implement a method: (name it "toThePowerOf") which has two parameters (int base and int power) and returns the result (base to power). Write a program which asks user to input two whole numbers from and calls the method with those numbers and then prints the result of the method.
//    For example: if user inputs 2 and 3, the result should be 8 (because 2^3=8). You can't use Math.pow() method!
//    Hint: to implement "To the power of" you can use loop and multiplication. For example,
//    2 to the power 3 can be calculated as follows:
//    2 * 2 = 4; (first iteration)
//    4 * 2 = 8; (second iteration)
//    Basically, we will need a variable "sum" where we store the result and then keep multiplying it with value power the same amount of times as the value of power.

function getNumbers() {
    do {
        let base = prompt('Please enter a number');
        let power = prompt('Please enter another number');

        base = parseInt(base);
        power = parseInt(power);

        if (isNaN(base) || isNaN(power)) {
            alert('Both inputs has to be numbers!');
        } else {
            return {
                base: base,
                power: power
            }
        }

    } while (true);
}

function toThePowerOf(base, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= base;
    }
    return result;
}

let userInput = getNumbers();
console.log(toThePowerOf(userInput.base, userInput.power));

*/
/*
//////////////////////////////////////////////////// Task #14
//Implement a method "calculateAverage" which has one parameter (array of whole numbers) calculates and returns the average of all number in array. Write an example program which uses this method and prints out the result.
//     Example of method usage:
//         int [] numbers = {1, 2, 3};
//         int result = calculateAverage(numbers);
//         System.out.println(result); //prints out 2
//     hint: To calculate the average value of all the numbers in array you will need to sum all
//           numbers in array and divide it by the length of array.

let numbers = [10, 20, 10];

function calcAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

console.log(calcAverage(numbers));
*/

////////////////////////////////////////////////// Task #15
//Implement a method (generateArray) which accepts whole number (int arrayLength) and creates/returns new array which is the size of "arrayLength" populate it with random, positive whole numbers. Write an example program which uses this method and prints out the result.
//     hint: use new Random().nextInt() to generate random number, search google for more info.
//     For example, the return value of generateArray(3) could be array which has values 2, 20, 1
//     inside.


function generateArray(arrayLength) {
    let numberCount;

    do {
        numberCount = prompt('Please enter an array length')
        numberCount = parseInt(numberCount);

        if (isNaN(numberCount)) {
            alert('Array length has to be a number')
        } else {
            break;
        }

    } while (true);

    let randomNumbers = [];
    for (let i = 0; i <= numberCount - 1; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100));
    }
    return randomNumbers;
}

console.log(generateArray(5));
