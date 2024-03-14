export {};

// const removeFromArray = function(arr: number[], ...restNums: number[]): number[] | number {
//     let newArr: number[] = [];
//
//     for (let i = 0; i < restNums.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[j] !== restNums[i]) {
//                 newArr.push(arr[j]);
//             } else {
//                 delete arr[j];
//             }
//         }
//         if (restNums.length > 1 && i < restNums.length - 1 ) {
//             newArr = [];
//         }
//     }
//     return newArr;
// };

const removeFromArray = function (numbers: number[], ...restNums: number[]): number[] {
    return numbers.filter(number => !restNums.includes(number))
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]

/*
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */

