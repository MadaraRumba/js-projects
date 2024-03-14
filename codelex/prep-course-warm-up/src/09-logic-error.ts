export {};

function multiply(a: number, b:number, c:number):number {
  return a * b * c;
}

const result = multiply(1, 3, 4);
console.log(result); // Expected output: 12


const test1 = multiply(3, -1, 4);
console.log(test1); // Expected output: 12

const test2 = multiply(-1, 20, 3.14);
console.log(test2); // Expected output: 12

