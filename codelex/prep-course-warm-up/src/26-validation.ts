export {};

/**
 * Complete the function to check if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal to any of the numbers in the array `excludedNums`
 */

const excludedNums = [6, 14, 91, 111];

// You are allowed to edit only this function
function validate(value: any): boolean {
    if (typeof value !== 'number') {
        return false;
    }

    if (!Number.isInteger(value)) {
        return false;
    }

    if (excludedNums.includes(value)) {
        return false;
    }

    return true;

    // or
    // return (typeof value === 'number' && Number.isInteger(value) && !excludedNums.includes(value);
}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));
console.log(validate(true));
console.log(validate(null));
console.log(validate(true));


/* 
  Expected output:
  
    false
    false
    true
    true
    false
*/
