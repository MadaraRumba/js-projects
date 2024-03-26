/**
 * Is Even
 *
 * Determine if given number is even
 * without using any mathematic operators ( +, -, %, /, Math, ParseInt etc.)
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n: number) {
    // binary representation
    // The least Significant Bit - for even numbers it is always 0; for odd  = 1.
    //bitwise & operator - checks LSB of the binary representation of the number

    return (n & 1) === 0;
}

export {isEven};


console.log(isEven(30984));