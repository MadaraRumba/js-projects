'use strict';
// Challenge #1
// FUNCTIONS
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
/*
// Data 1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

const checkWinner = (team1, team2) => { // arrow function
   if (avgDolphins > avgKoalas * 2){
       console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
   } else if (avgKoalas>avgDolphins*2 ){
       console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
   } else{
       console.log('No team wins');
   }
};
const winner = checkWinner(avgDolphins, avgKoalas);

 */
/*
// Data2
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas){ //function declaration
    if (avgDolphins > avgKoalas * 2){
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas>avgDolphins*2 ){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else{
        console.log('No team wins');
    }
};
const winner = checkWinner(avgDolphins, avgKoalas);

 */
/*
// Data 3
const avgDolphins = calcAverage(20, 10, 15);
const avgKoalas = calcAverage(10, 10, 10);
console.log(avgDolphins, avgKoalas);

const checkWinner = function (avgDolphins,avgKoalas){
    if (avgDolphins > avgKoalas * 2){
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas>avgDolphins*2 ){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else{
        console.log('No team wins');
    }
};

checkWinner(avgDolphins, avgKoalas);

*/

// Challenge #2
//ARRAYS
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
 */
/*
const calcTip = function(bill) {
     const tip =  bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
     return tip;
};

calcTip(100);

const bills = [125, 55, 44]; // given data
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0]+ tips[0], bills[1]+ tips[1], bills[2]+ tips[2]];

console.log(bills, tips, total);
*/

//Challenge #3
// FUNCTIONS, OBJECTS
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations!
Remember: BMI = mass / height ** 2 = mass/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
};
mark.calcBMI();
console.log(mark);

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
    this.bmi = this.mass/(this.height*this.height);
    return this.bmi;
    }
};
john.calcBMI();
console.log(john);

console.log(mark.bmi > john.bmi ? `${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(2)})!` : `${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${mark.fullName} (${mark.bmi.toFixed(2)})!`);
*/


//Challenge #4
// Arrays and functions
/*
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
    loop to perform the 10 calculations!
    Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

 */

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips=[];
const totals = [];

//expression
// const calcTip = function (bill){
//      return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
console.log(calcTip(100));

// declaration
function calcTip(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for(let i = 0; i<bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

// arrow

// const calcTip = bill => {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum / arr.length;
};

console.log(calcAverage(totals));
 */

/*
// Challenge - Object Methods lecture
// Jonas is a 46 year old teacher, and he has a / no driver's licence.

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job} and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());
*/


