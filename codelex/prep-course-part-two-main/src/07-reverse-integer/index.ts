/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number): number {
    let number = int.toString();
    let reversedNumber = parseInt(number.split("").reverse().join(""));
    if (int < 0) {
        reversedNumber *= -1;
    }
    return reversedNumber;
}

export {reverse};
