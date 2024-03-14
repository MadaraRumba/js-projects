export {};

const repeatString = (input: string, count: number): string => {
    let createdString = '';
    for (let i = 0; i < count; i++){
        createdString += input;
    }
    return createdString;
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'

//
