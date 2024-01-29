'use strict';
// Challenge #1
// FUNCTIONS
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
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

const calcTip = function(bill) {
     const tip =  bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
     return tip;
};

calcTip(100);

const bills = [125, 55, 44]; // given data
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0]+ tips[0], bills[1]+ tips[1], bills[2]+ tips[2]];

console.log(bills, tips, total);

