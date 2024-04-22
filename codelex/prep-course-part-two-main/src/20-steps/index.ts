/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number) {
    for (let i = 0; i<n; i++){
        let spaces = ' '.repeat(n-i-1);
        let hashTags = '#'.repeat(i + 1);

        console.log(hashTags + spaces);
    }
}

export { steps };
