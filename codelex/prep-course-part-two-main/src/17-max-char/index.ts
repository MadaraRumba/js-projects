/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
    // empty object that stores character frequency
    // iterate trough string and count the frequency for each character for... of(iterates over iterable directly)
    // increment character each time it occurs by 1
    // variable where most common char is stored
    // variable for frequency set to 0

    // iterate through char frequencies for ... in (iterates over properties)
    // if one is higher than the highest frequency - that becomes most common char

    const charCount: { [key: string]: number } = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let mostCommonChar;
    let highestFrequency = 0;

    for (let char in charCount) {
        if (charCount[char] > highestFrequency) {
            highestFrequency = charCount[char];
            mostCommonChar = char;
        }
    }
    return mostCommonChar;

}

export {maxChar};
