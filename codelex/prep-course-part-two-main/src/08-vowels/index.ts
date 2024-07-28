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

function vowels(sentence: string) {
    // iet cauri string un salīdzināt, vai burts === patskanis
    // ielikt patskani array
    // array.length
    return sentence.length - sentence.replace(/[aeiou]/gi, '').length;

    // let vowels = [];
    // let givenString = Array.from(sentence.toLowerCase());
    //
    // for (let i = 0; i < givenString.length; i++) {
    //     if (givenString[i] === 'a' || givenString[i] === 'e' || givenString[i] === 'i' || givenString[i] === 'o' || givenString[i] === 'u') {
    //         vowels.push(sentence[i]);
    //     }
    // }
    // return vowels.length;
}

export {vowels};
