'use strict';
/*
//JavaScript Fundamentals – Part 2
//Coding Challenge #1
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


//Coding Challenge #2

// function calcTip(bill) {
//     if (bill <= 300 && bill >= 50) {
//         const tip = 0.15 * bill;
//         return tip;
//     } else {
//         const tip = 0.20 * bill;
//         return tip;
//     }
// }

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
