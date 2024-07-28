// declaration
function subtractFirst(a: number, b: number): number {
    return a - b;
}

//expression
const subtractSecond = function (a: number, b: number): number {
    return a - b;
}

// arrow
const subtractThird = (a: number, b: number): number => {
    return a - b;
}

const subtractFourth = (a: number, b: number): number => a - b;

// console.log(subtractFourth(20, 8));