/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {

    // normalize strings
    // make an arrays
    // check if length is the same
    // check if the A includes B letters

    const arrayA = stringA.toLowerCase().replace(/[^a-zA-Z\d\s-]/g, '').split('');

    const arrayB = stringB.toLowerCase().replace(/[^a-zA-Z\d\s-]/g, '').split('');

    if (arrayA.length !== arrayB.length) {
        return false;
    }

    return arrayA.every(letter => arrayB.includes(letter));
}

export {anagrams};
