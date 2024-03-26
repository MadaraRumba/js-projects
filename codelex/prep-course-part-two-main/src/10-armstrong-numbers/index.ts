/**
 * An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
 *
 * For example:
 *
 *  9 is an Armstrong number, because 9 = 9^1 = 9
 *  10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
 *  153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 *  154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
 *
 * Write some code to determine whether a number is an Armstrong number.
 */

function validate(n: number) {
    // get the length of the number (digits)
    // declare a sum variable and assign 0
    // loop through each digit and calculate the sum of each digit raised to the power of the number of digits

    let number = n;
    const digits = n.toString().length;
    let sum = 0;

    while (number > 0) {
        let lastNumber = number % 10; //the last digit
        sum += lastNumber ** digits;
        number = Math.floor(number / 10); // remove the last digit
    }

    return sum === n;

}

export {validate};
