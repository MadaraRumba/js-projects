function capitalize(str: string) {
    // 1. Deklaret mainigo
    // 2. sadalit teikumu vardos (.split(' '))
    // 3. iet cauri vardiem
    // 4. iegut katru vardu
    // 5. iegut pirmo burtu
    // 6. toUpperCase
    // 7. salieku atpakal kopa ar atlikuso vardu
    // 8. lipinat klat jauno vardu tam masivam un neaizmirst par atstarpi
    // 9. savienot vardus ar atstarpem
    // 10. atgriezt stringu

    let result: string[]= [];
    const words = str.split(' ');

    words.forEach((word) =>{
        const firstLetterUpper = word[0].toUpperCase();
        const newWord = firstLetterUpper + word.substring(1);

        result.push(newWord);
    });
    return result.join(' ');
}

console.log(capitalize('my name is madara'));


// let result: string[] = [];
// const words = str.split(' ');
// words.forEach((word) => {
//     const firstLetterUpper = word[0].toUpperCase();
//     const newWord = firstLetterUpper + word.substring(1);
//     result.push(newWord);
// });
// return result.join(" ");
// }
// export { capitalize };