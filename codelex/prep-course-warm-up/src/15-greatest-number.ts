export {};

function printGreatestNumber(x:number, y:number):any {
    if (x>y){
        return x;
    } else if (x<y){
        return y;
    } else {
        return `${x} = ${y}`;
    }
}

console.log(printGreatestNumber(1, 2)); // Expected output: 2
console.log(printGreatestNumber(5, 2)); // Expected output: 5
console.log(printGreatestNumber(5, 5)); // Expected output: 5
