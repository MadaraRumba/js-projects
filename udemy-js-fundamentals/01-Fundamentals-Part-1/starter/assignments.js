/* LECTURE: Values and Variables

let country = "Latvia";
let continent = "Eurasia";
let population = 1.884;

console.log(country);
console.log(continent);
console.log(population);
*/


/*
// TASK #1
//data #1
// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

//data#2
const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn** 2;

let bmiMarkRounded = bmiMark.toFixed(2);
let bmiJohnRounded = bmiJohn.toFixed(2);
markHigherBMI = bmiMarkRounded>bmiJohnRounded;
console.log(bmiMarkRounded, bmiJohnRounded);
// console.log(bmiMarkRounded, bmiJohnRounded, markHigherBMI);

//TASK #2
// if(bmiMarkRounded>bmiJohnRounded){
//     console.log(`Mark's BMI is higher than John's!`)
// } else {
//     console.log(`John's BMI is higher than Mark's!`)
// }



if(bmiMarkRounded>bmiJohnRounded){
    console.log(`Mark's BMI ( ${bmiMarkRounded} ) is higher that John's ( ${bmiJohnRounded} )!`)
} else{
    console.log(`John's BMI ( ${bmiJohnRounded} ) is higher that Mark's ( ${bmiMarkRounded} )!`)
}
*/


//TASK #3
// data#1
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// data#2
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

//data#3
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
//
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas){
//     console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas){
//     console.log("Koalas win the trophy");
// } else {
//     console.log("Both win the trophy");
// }

// const minimalScore = 100;
//
// if(scoreDolphins > scoreKoalas && scoreDolphins >= minimalScore){
//     console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= minimalScore){
//     console.log("Koalas win the trophy");
// } else if (scoreDolphins === scoreKoalas && scoreKoalas >= minimalScore && scoreDolphins >= minimalScore ){
//     console.log("Both win the trophy");
// } else {
//     console.log("No team wins the trophy.");
// }

//TASK #4

// let tip;
//
// if (bill >= 50 && bill <= 300){
//     let tip = 0.15 * bill;
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
// } else {
//     let tip = 0.2 * bill;
//     console.log(`The bill was ${bill}, the tip was ${tip} , and the total value ${bill + tip}`);
// }
//
// bill >= 50 && bill <=300 ? console.log(`The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${bill + bill * 0.15}`) : console.log(`The bill was ${bill}, the tip was ${bill * 0.20}, and the total value ${bill + bill * 0.20}`);

// // const bill = 275;
// const bill = 40;
// /   / const bill = 430;
//
// let tipPercent= bill >= 50 && bill <= 300 ? 0.15 : 0.20;
// let tip = bill * tipPercent;
//
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tipPercent * bill}.`);
