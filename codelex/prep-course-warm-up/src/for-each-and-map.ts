///////////////////////////////////////// FOR LOOP
/*
const array1 = [1, 4, 9, 16];
const result = [];

for (let i = 0; i < array1.length; i++) {
  const number = array1[i];
  result.push(number * 2);
}

console.log(result);
*/

//////////////////////////////////// FOR EACH
/*


function logger(element){
  console.log(element);
}

// or
// const logger = element => console.log(element);

array1.forEach(logger);

*/

/*
const array1 = [1, 4, 9, 16];
const result:number[] =[];
const double = (element:number) => {
    result.push(element * 2);
}

// function double (element:number){
//   console.log(element *2);
// }

array1.forEach(double);

// or
// array1.forEach((n) => result.push(element*2));

console.log(result);
 */

/////////////////////////////////////////////// MAP

const array1 = [1, 4, 9, 16];
 console.log(array1.map((element) => element*2));

let res = array1.map((n) => n);

console.log(res);