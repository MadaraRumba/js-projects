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