/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
    scores: number[];
    sortedScores: number[];

    constructor(scores: number[]) {
        this.scores = scores;
        this.sortedScores = Array.from(scores);
        this.sortedScores.sort((a, b) => b - a);
    }

    get latest() {
        // return 0;
        let index = this.scores.length - 1;
        return this.scores[index];
    }

    get personalBest() {
        // return 0;
        return this.sortedScores[0];
    }

    get personalTopThree() {
        // return 0;
        return this.sortedScores.slice(0, 3);
    }
}

export {HighScores};
