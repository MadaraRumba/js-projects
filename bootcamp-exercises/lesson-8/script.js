'use strict';
/*
/////////////////////////////////////// Task #1
//Implement a void method (method which doesn't return anything) which just outputs text "Hello, John!". Write a program which demonstrates usages of this method.

function greetJohn() {
    console.log('Hello, John!')
}

let firstName = 'John';

if (firstName === 'John') {
    greetJohn();
} else {
    console.log(`Hello, ${firstName}`);
}

firstName = 'Sally';

if (firstName === 'John') {
    greetJohn();
} else {
    console.log(`Hello, ${firstName}!
    
    `);
}
 */

/*
//////////////////////////////////////Task #2
//Implement a method "greetPerson" which accepts one argument (String name) and output text "Hello, <NAME>!" <NAME> name is the value of argument. Write a program which demonstrates usages of this method. Hint: to concatenate text (add/put it together), you can use + operator.

function greetPerson(name) {

    let greeting = 'Hello, '
    console.log(greeting + name);
}

let name = '<NAME>';

greetPerson(name);

 */

/*
///////////////////////////////// Task #3
//Implement a method "multiply" which has two parameters (whole numbers, x1 and x2). This method has to multiply these two parameters and output the result. Write a program which uses this method and outputs the result to user. Example: multiply(5, 5); //25;  multiply(2, 2); //4
let number1 = 5;
let number2 = 5;

function multiply(x1, x2) {
    return console.log(x1 * x2);
}

multiply(number1, number2);

 */
/*
//////////////////////////////// Task #4
//Implement a method "getGreatest" with three whole numbers as parameters (x1, x2, x3) and returns the highest number of those. (hint: you will have to use if / else to compare the numbers, similar as we did in Lesson 4, task 2)
//   Example of method usage:
//        System.out.println(getGreatest(1, 2, 3)); //prints 3
//        System.out.println(getGreatest(5, 2, 3)); //prints 5
//        int result = getGreatest(5, 10, 3);
//        System.out.println(result);

number1 = 5;
number2 = 3;
let number3 = 2;

function getGreatest(x1, x2, x3) {
    if (x1 > x2 && x1 > x3) {
        return x1;
    } else if (x2 > x1 && x2 > x3) {
        return x2;
    } else if (x3 > x1 && x3 > x2) {
        return x3;
    } else {
        return console.log('All numbers are equal')
    }
}

let result = getGreatest(number1, number2, number3);
console.log(result);
 */

/*
///////////////////////////////// Task #5
//Implement a method "isEqual" which has two parameters (whole numbers) and returns true if they are equal and false if they are not. Write a program which uses this method and outputs the result to user.

function isEqual(x1, x2) {
    if (x1 === x2) {
        return true;
    } else {
        return false;
    }
}

number1 = 5;
number2 = 5;

console.log(isEqual(number1, number2));
 */

/*
////////////////////////////////////////////////////// Task #6
//Implement a method "isPositive" which has one parameter (whole number) and returns true if it is positive or zero and false, if it is negative. Write a program which uses this method and outputs the result to user.

function isPositive(x1) {
    if (x1 > 0) {
        return true;
    } else {
        return false;
    }
}

number1 = -5;
result = isPositive(number1);

function printResult() {
    console.log(result);
}

printResult();

 */

/*
///////////////////////////////////////////////////// Task #7
//Implement a method "isEven" which has one parameter (whole number) and returns true if the number is even or false, if it is not. Write a program which uses this method and outputs the result to user. ( hint: you can use % to check if number is event. Example: https://www.programmingsimplified.com/java/source-code/java-program-odd-even)

let number1 = 4;

function isEven(x1) {
    if (number1 % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

isEven(number1);

function printIsEven() {
    console.log(isEven(number1));
}

printIsEven();
*/

/*
///////////////////////////////////////////////// Task #7.1
//Implement a method "weather" which has one parameter "degrees" (whole number) and returns text.
//     if the "degrees" value is higher than 22, then return text "hot",
//     if "degrees" value is between 16 - 21 (including), then return text "normal"
//     if "degrees" value is between 5 - 15 (including), then return text "cool"
//     if "degrees" value is less than 5, return text "cold"
//     Write a program which uses this method and outputs the result to user. Example of how the method
//     can be used:
//     System.out.println(weather(22)); // should print "hot"

let x1 = 1;

function weather(degrees) {
    if (degrees > 22) {
        return 'hot';
    } else if (degrees > 15 && degrees < 22) {
        return 'normal';
    } else if (degrees > 4 && degrees < 16) {
        return 'cool';
    } else {
        return 'cold';
    }
}

let result = weather(x1);

function printWeather() {
    console.log(result);
}

printWeather();
*/
/*
/////////////////////////////////////////////////////// Task #8
//Implement a method "printNumbers" with two whole numbers as parameters (n1 and n2) and prints out all the numbers from n1 to n2. This method doesn't return anything, it just prints the numbers. If n1 is greater than or equal to n2 then it doesn't print anything.

function printNumbers(n1, n2) {
    for (let i = n1; i < n2 + 1; i++) {
        if (n1 >= n2) {
            break;
        } else {
            console.log(i);
        }
    }
}

printNumbers(5, 15);
*/
/*
////////////////////////////////////////////////////////// Task #8.1
//Modify previous task so that program asks numbers n1 and n2 from user and then calls the method "printNumbers" with the numbers that user entered.

let n1;
let n2;

function getNumbers() {
    do {
        n1 = prompt('Please enter a number');
        n2 = prompt('Please enter greater number');

        n1 = parseInt(n1);
        n2 = parseInt(n2);

        if (isNaN(n1) || isNaN(n2)) {
            alert('Both inputs has to be numbers!');
            continue;
        }

        if (n1 >= n2) {
            return;
        } else {
            return {
                from: n1,
                to: n2
            };
        }
    } while (true);
}

function printNumbers(numbers) {
    for (let i = n1; i < n2 + 1; i++) {
        console.log(i);
    }
}

printNumbers(n1, n2);


let numbers = getNumbers();
if (numbers) {
    printNumbers(numbers)
}
*/

/*
//////////////////////////////////////////////////// Task #8.2
//Implement a method "printNumbersFromLowestToHighest" with two whole numbers as parameters (n1 and n2) and prints out all the numbers from lowest to highest. For example:
// printNumbersFromLowestToHighest(10, 5); // this method call will print out numbers 5, 6, 7, 8, 9, 10
//printNumbersFromLowestToHighest(5, 10); // this method call will also print out numbers 5, 6, 7, 8, 9, 10
//printNumbersFromLowestToHighest(3, 1);  // this method call will print out numbers 1, 2, 3

function printNumbersFromLowestToHighest(n1, n2) {
    for (let i = n2; i < n1 + 1; i++) {
        console.log(i);
    }
}

printNumbersFromLowestToHighest(10, 5);
*/
/*
/////////////////////////////////////////////////// Task #9
//Implement a method "findHighest" which accepts array of whole numbers as argument returns the highest value number in array. Write a program which demonstrates the usage of this method.

let numbers = [5, 2, 100, 10000, 9, 2.1, -5];

function getHighest(array) {
    array.sort(function (a, b) {
        return a - b
    });
    console.log(array[array.length - 1]);
}

getHighest(numbers);
*/

/*
///////////////////////////////////////////// Task #10
//Implement a method "findLowest" which accepts array of whole numbers as argument returns the value of lowest number in array. Write a program which demonstrates the usage of this method.

function getLowest(array) {
    array.sort(function (a, b) {
        return a - b
    });
    console.log(array[0]);
}

getLowest(numbers);
*/

/*
/////////////////////////////////////////// Task #11
//Implement a method "calculateSum" which accepts one argument (array of whole numbers) and returns the sum of those numbers. Hint: you will have to loop trough array and sum all the elements in it and then return the result.

let numbers = [5, 2, 100, 10000, 9, 2.1, -5];

function calculateSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let sumBefore = sum;
        sum += array[i];
        console.log(`${sumBefore} + ${array[i]} = ${sum}`);
    }
    return sum;
}

console.log(calculateSum(numbers));
*/

