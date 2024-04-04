/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
    for (let i = 0; i < n; i++) {
        let spaces = ' '.repeat(n - i - 1);
        let hashTags = '#'.repeat(2 * i + 1);

        console.log(spaces + hashTags + spaces);
    }

}

export {pyramid};
