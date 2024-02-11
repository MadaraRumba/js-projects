'use strict';
/*
// Task #1
// Declare and initialize array with four arbitrary whole numbers. Print out all of the numbers
// in array. Then ask user to input whole number and assign it to the first element in array.
// Then print out array again.

let array = [5, 2, 66, 444];
console.log(array);

let input = prompt('Please enter a number');
input = parseInt(input);

array[0] = input;
console.log(array);
*/

/*
// Task #2
// Declare and initialize array with arbitrary whole numbers. Ask user to input whole number and check if your array contains this number. Print "Array contains <n>!" or "Array doesn't contain number <n>" if the array does or doesn't contain number.

let numbers = [5, 7, 19, 1];

let userInput = prompt('Please enter a whole number');

userInput = parseInt(userInput);

function containsNumber(numbers, targetNumber) {
    return numbers.includes(targetNumber);
}

if (containsNumber(numbers, userInput)) {
    console.log(`Array contains Nr. ${userInput}'`);
} else {
    console.log(`Array doesn't contain Nr. ${userInput}`);
}
*/

/*
//////////////////////////////////////////////////////////// Task #3
// Declare and initialize array with arbitrary whole numbers. Print out the array to user.Then write a code which creates new array with the same values, but in reverse order. Print the new array.

let array = [2, 6, 77, 13, 100];
console.log(array);

console.log(array);
array.sort(function(a, b) {
    return b - a;
});

console.log(array);
*/

/*
//////////////////////////////////////////////////////////// Task #4
//Declare and initialize array with arbitrary whole numbers. Ask user to input whole number, then search array for that number and print the index of that number.. If there is no such number in array, print "Element <n> not found in array!"

let array = [2, 6, 77, 13, 100];
console.log(array);

function isNumber(value) {
    let number = parseInt(value);
    return !isNaN(number);
};

let input;

do {
    input = prompt('Please enter a number');
    if (isNumber(input)) {
        break;
    } else {
        alert('Make sure you entered a number and try again');
    }
} while (true);

input = parseInt(input);

function getIndex(array, input) {
    if (array.indexOf(input) !== -1) {
        console.log(`Index of ${input} is ${array.indexOf(input)}.`);
    } else {
        console.log(`Element ${input} not found in array.`)
    }
};

getIndex(array, input);
*/
/*
////////////////////////////////////////////////////////////  Task #5
//Declare and initialize array with five arbitrary whole numbers and write code that:
// 1) calculates the sum of all elements in array
// 2) finds the minimum and maximum value in array
// 3) multiplies all elements in array then print out all the results (minimum, maximum value. All sum of all elements and all element multiplication result)
// hints: create a variable and then use while loop and += operator to sum all elements. Similar approach can be used to multiply all elements (operator *=).
// Bonus:  also find and print out the second smallest element in an array.

let array = [1, 2, 3, 4, 5];
console.log(array);


function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

function getMinAndMax(arr) {
    array.sort(function (a, b) {
        return a - b;
    });

    return {
        min: arr[0],
        max: arr[arr.length - 1]
    };
}

function getFactor(arr) {
    let factor = 1;
    for (let i = 0; i < arr.length; i++) {
        factor *= arr[i];
    }
    return factor;
}

console.log(getSum(array), getMinAndMax(array), getFactor(array));

function getSecondSmallest(arr) {
    return {
        secondSmallest: arr[1]
    };
}

console.log(getSecondSmallest(array));
*/

/*
//////////////////////////////////////////////////////////// Task #6
//Declare and initialize array with arbitrary letters (use char data type), print out all the values. Then ask user to input char and then search and remove this char from array (if it exists).Then print out new array or message "Char <n> is not in array."
// Also, since arrays are fixed size and you can't remove element from them, you will have to create new array (copy of existing one), but without the element you want to remove.

let array = ['A', 'B', 'C', 'D', 'E'];
console.log(array);

let input = prompt('Please enter a letter');

function removeInput(array, input) {
    let index = array.indexOf(input);
    if (index !== -1) {
        array.splice(index, 1);
        console.log(array);
    } else {
        console.log(`Element ${input} not found in array.`)
    }
}

removeInput(array, input);
*/


//////////////////////////////////////////////////////////// Task #7
//Ask user to input whole number and declare/initialize array of such size. Then ask user to fill array (so he enters whole number for each element in array). Then calculate average value of an array elements and print the result.

////////////////////////////////////////////////////// version 1
// let array;
// do {
//     let input = prompt(`Enter ${arraySize} numbers separated by commas`);
//     array = input.split(",");
//
//     if (array.length != arraySize) {
//         alert(`You have to enter ${arraySize} numbers.`);
//         continue;
//     }
//
//     let isValidArray = true;
//     for (let i = 0; i < array.length; i++) {
//         let number = parseInt(array[i]);
//         if (isNaN(number)) {
//             isValidArray = false;
//             alert(`All entered elements have to be numbers.`);
//             break;
//         }
//         array[i] = number;
//     }
//     if (isValidArray) {
//         break;
//     }
// } while (true);
////////////////////////////////////////////////////// version 1

function convertToNumbers(values) {
    let numbers = [];
    for (let i = 0; i < values.length; i++) {
        let number = parseInt(values[i]);
        if (isNaN(number)) {
            break;
        } else {
            numbers.push(number);
        }
    }
    return numbers;
}

function getRequiredNumberCount() {
    do {
        let requiredNumberCount = prompt('Please enter an array size');
        requiredNumberCount = parseInt(requiredNumberCount);
        if (!isNaN(requiredNumberCount)) {
            return requiredNumberCount;
        } else {
            alert('Make sure you entered a number and try again');
        }
    } while (true);
}

function getNumbersFromUser(requiredNumberCount) {
    do {
        let input = prompt(`Enter ${requiredNumberCount} numbers separated by commas`);
        let array = input.split(",");

        if (array.length != requiredNumberCount) {
            continue;
        }

        let numbers = convertToNumbers(array);
        if (numbers.length === requiredNumberCount) {
            return numbers;
        } else {
            alert(`All entered elements have to be numbers.`);
        }
    } while (true);
}

function calcAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum / array.length;
}

let numberCount = getRequiredNumberCount();
let numbers = getNumbersFromUser(numberCount);
let average = calcAverage(numbers);
console.log(`The average is ${average}`);


/*
//////////////////////////////////////////////////////////////// Task #8
// Write a method which accepts two int arrays as an argument and returns true if they are the same (contain the same elements and have the same size).

function compareArrays(a, b) {
    if (a.length !== b.length) return false;
    else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
};

let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4]

console.log(`Are arrays equal: ${compareArrays(a, b)}`);
*/
