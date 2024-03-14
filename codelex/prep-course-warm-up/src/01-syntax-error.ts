export {};

function addNumbers(a:number, b:number, c:number): number {
    return a + b + c;
}

const result = addNumbers(1, 3, 4);
const result1 = addNumbers(2, 3, 4);
const result2 = addNumbers(3, 3, 4);

console.log(result, result1, result2); // Expected output: 8
