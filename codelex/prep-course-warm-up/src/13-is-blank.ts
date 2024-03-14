export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */

function isBlank(input: string | null): boolean {

    // if (input === null){
    //     return true;
    // }
    // if(input.trim() === ''){
    //     return true;
    // } else {
    //     return false;
    // }

    // or
    // const trimmedString = input.trim();

    //or
    // return trimmedString === '';

    return !input || !input.trim();

    //or
    // return input === null || input.trim() === '';
}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
