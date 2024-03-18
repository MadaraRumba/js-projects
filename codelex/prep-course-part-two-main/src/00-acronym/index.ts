/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    // deklaret empty string
    // sadalit teikumu vardos ar .split(' ')
    // iet cauri vardiem
    // iegut katru vardu
    // iegut pirmo burtu
    // toUpperCase()
    // lielo burtu likt klat mainigajam arpus for loop
    // atgriezt salikto akronimu

    let acronym = "";
    // const words = input.split(' ');
    const words = input.split(/[ -]/g);
    words.forEach((word) => {
        // const firstLetterUpper = word[0].toUpperCase();
        // acronym += firstLetterUpper;
        let cleanWord = word.replace(/[^a-zA-Z\d\s-]/g, "");
        if (cleanWord[0]) {
            const firstLetterUpper = cleanWord[0].toUpperCase();
            acronym += firstLetterUpper;
        }
    });
    return acronym;
}

export {parse};
