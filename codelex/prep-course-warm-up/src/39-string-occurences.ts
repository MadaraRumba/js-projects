export {};

const count = (sentence:string, word: string) => {

    let array = sentence.split(' ');
    let newArray = [];

    for (let i = 0; i< array.length; i++){
        if (array[i].toLowerCase() === word.toLowerCase()){
            newArray.push(array[i]);
        }
    }

    return newArray.length;

    //or
    // return count = sentence.split(word.loLowerCase()).length - 1;

};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
