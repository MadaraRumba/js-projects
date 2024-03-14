export {};

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */

/*
const stringToArray = (fullName: string): string[] => {
    return fullName.split(" ");
}

console.log(stringToArray("John Doe Malkovich")); // Expected output: ['John', 'Doe']
*/

const stringToArray = (fullName: string): string[] => {
    let arr: string[] = [];
    let str = '';

    for (let i = 0; i < fullName.length; i++) {
        const letter = fullName[i]; // tiks izmantots vairakas reizes, tpc pieglabaju mainigajaa

        if (letter !== ' ') {
            str += letter;
        } else {
            arr.push(str);
            str = '';
        }

        if (i === fullName.length - 1) {
            arr.push(str);
        }
    }
    return arr;
}

console.log(stringToArray("John Doe Malkovich")); // Expected output: ['John', 'Doe'];