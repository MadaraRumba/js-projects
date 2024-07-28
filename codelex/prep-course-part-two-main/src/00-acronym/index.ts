/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    return input.split(/[ -]/g)
        .map(word => word.replace(/[^a-zA-Z]/g, ""))
        .filter(word => word)
        .map(word => word[0].toUpperCase())
        .join('');
}

export {parse};