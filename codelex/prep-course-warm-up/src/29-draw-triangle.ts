export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(numberOfStars: number) {
    let triangle = '';
    for (let i = 0; i < numberOfStars; i++) {
        console.log(triangle += '*');
    }
    console.log('');

}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
