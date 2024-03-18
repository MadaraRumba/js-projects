export {};

const count = (sentence: string, word: string) => {
    let array = sentence.split(' ');
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }
    return count;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
