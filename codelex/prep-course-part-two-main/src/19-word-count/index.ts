/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {

    count(str: string) {
        // empty object that stores string frequency
        // iterate trough string and count the frequency for each string for... of(iterates over iterable directly)
        // increment string count each time it occurs by 1
        // return object keys and properties

        const wordCount: { [key: string]: number } = {};
        let wordArray = str
            .toLowerCase()
            .replace(/[\t\n\s]+/g, " ")
            .trim()
            .split(' ');

        for (let word of wordArray) {
            let prop = wordCount[word];
            if (prop && typeof prop === 'number') {
                wordCount[word] = ++prop;
            } else {
                wordCount[word] = 1;
            }
        }
        return wordCount;
    }
}

export {Words};
