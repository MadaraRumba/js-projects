/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string): string {
    /*
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
        reverseString += str[i];
    }
    console.log('---------------')
    return reverseString;
    */

    return str.split('').reverse().join('');

}

export {reverse};