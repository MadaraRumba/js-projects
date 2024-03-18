/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str: string): string {
    // deklarēt tukšu masīvu
    // iegūt katru vārdu .split(' ')
    // atrast katra vārda pirmo burtu
    // .toUpperCase()
    // savienot lielo burtu ar atlikušo vārdu
    // pievieno iegūtos vārdus tukšajā masīvā .push()
    // savienot vārdus ar atstarpēm .join(' ')


    // let sentence: string[] = [];
    // const words = str.split(' ');
    //
    // words.forEach(word => {
    //     const firstLetterUpper = word[0].toUpperCase();
    //     const newWord = firstLetterUpper + word.substring(1);
    //
    //     sentence.push(newWord);
    //
    // });
    //
    // return sentence.join(' ');

    return str.split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');

}

export {capitalize};
