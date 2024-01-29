'use strict';
/*
//JavaScript Fundamentals – Part 2
//Coding Challenge #1  -- FUNCTIONS--
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//Data 1
let scoreDolphins = calcAverage (44, 23, 71 );
let scoreKoalas = calcAverage (65, 54, 49 );

console.log(scoreDolphins, scoreKoalas);

//Data 3
// const scoreDolphins = calcAverage (10, 10, 10 );
// const scoreKoalas = calcAverage (10, 10, 10 );

const checkWinner = (scoreDolphins, scoreKoalas) => {
    if (scoreDolphins >= 2 * scoreKoalas) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
    } else if (scoreKoalas >= 2 * scoreDolphins) {
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);


//Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/


//Coding Challenge #2  -- ARRAYS --

// function calcTip(bill) {
//     if (bill <= 300 && bill >= 50) {
//         const tip = 0.15 * bill;
//         return tip;
//     } else {
//         const tip = 0.20 * bill;
//         return tip;
//     }
// }
/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const tip = calcTip(100);
console.log(tip);

console.log(calcTip(480));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);

 */

/*
Challenge #3 -- OBJECTS --
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations!
Remember: BMI = mass / (height * height) (mass in kg and height in meters).
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
2. Create a calcBMI method on each object to calculate the BMI (the same method on both objects. Assign the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi; // adds bmi to properties
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
};

mark.calcBMI(); // calling a method to return bmi
john.calcBMI();

console.log(mark.bmi > john.bmi ? `${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(2)})!` : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(2)})!`);
*/

/* Challenge #4
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
 */
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    // console.log(calcTip(bills[i]));
    const tip = calcTip(bills[i])
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);
*/

/* BONUS
Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));
*/