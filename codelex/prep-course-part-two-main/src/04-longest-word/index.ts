/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sentence: string) {
    // empty string for the longest word
    // replace any other tha alphabetical characters with ''
    // split in words .split(' ');
    // loop through words
    // check the length and if it is longer then the previous - re - declare as the longest

    let longestWord = '';
    const words = sentence
        .replace(/[^a-zA-Z\d\s-]/g, '')
        .split(' ');

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}

export {longestWord};
