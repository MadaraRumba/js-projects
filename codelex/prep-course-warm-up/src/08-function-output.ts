export {};

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

// const result = getRandomNumber(); // call the function created above and put the result inside the variable
// console.log(result); // Expected output: {random number}
//
// for (let i = 0; i<100; i++) {
//   console.log(getRandomNumber());
// }


function printRandomNumberStopAtNine(): void {
    let result: number;
    do {
        result = getRandomNumber();
        console.log(result);
    } while (result !== 9);
}

printRandomNumberStopAtNine();