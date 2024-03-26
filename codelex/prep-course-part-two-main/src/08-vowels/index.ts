/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
    // iet cauri string un salīdzināt, vai burts === patskanis
    // ielikt patskani array
    // array.length

    let vowels = [];
    let givenString = Array.from(s.toLowerCase());

    for (let i = 0; i < givenString.length; i++) {
        if (givenString[i] === 'a' || givenString[i] === 'e' || givenString[i] === 'i' || givenString[i] === 'o' || givenString[i] === 'u') {
            vowels.push(s[i]);
        }
    }
    return vowels.length;
}

export {vowels};
