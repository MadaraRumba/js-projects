export {};

function add(...numbers:number[]):number {
    let result: number = 0;
    for (let num of numbers) {
        result += result;
    }
    return result;
}

function subtract(...numbers:number[]):number {
    let result: number = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result -= numbers[i];
    }
    return result;
}

function sum(numbers:number[]):number {
    let sum:number = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

function multiply(numbers:number[]):number {
    let result = 1;

    for(let i = 0; i<numbers.length; i++){
        result *= numbers[i];
    }
    return result;
}

function power(...numbers:number[]):number {
    return numbers.reduce((accumulator, currentValue) => accumulator ** currentValue);
}



console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
