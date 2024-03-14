export {};

// console.log(truncateString("CODELEX", 4)); // Expected output: CODE

function truncateString(word: string, length: number): string {
    // return word.slice(0, length);
    // return word.substring(0, length); // paredzeeta tiesi sim merkim

    let newWord = '';
    for (let i = 0; i < length; i++) {
        console.log('i, word[i] : ', i, word[i]);
        newWord += word[i];

        console.log('result: ', newWord);
    }
    return newWord;
}

//1. ar for loop iziet cauri ciklam
//2. cik reizes atkartot darbibu
//3. saakt skaitit ar 0
//4. ar index piekluut burtam stringaa
//5. izveidot tuksu mainigo, kuram pievienot burtus pa vienam
//6. return vaardu

console.log(truncateString('CODELEX', 4));


