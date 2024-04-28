const naturalNumbers: number[] = [1, 2, 3];
let doubles: number[] = [];

for (let i = 0; i < naturalNumbers.length; i++) {
    doubles.push((naturalNumbers[i]) * 2);
}

// console.log(doubles);

doubles = naturalNumbers.map(it => it * 2);
// console.log(doubles);

let triples: number[] = [];
const triples = naturalNumbers.map(it => it * 3);
// console.log(triples);


const alphabet: string[] = ['a', 'b', 'c', 'd'];
const alphabetCapital: string[] = alphabet.map(letter => letter.toUpperCase());

console.log(alphabetCapital);


interface Player {
    name: string;
    wins: number;
    losses: number;
    score?: number;
}

const players: Player[] = [
    {
        name: "Bonija",
        wins: 5,
        losses: 2
    },

    {
        name: "Klaids",
        wins: 6,
        losses: 5
    }
];

const playerNames: string[] = players.map(player => player.name);
console.log(playerNames);

const playerWins: number[] = players.map(player => player.wins);
console.log(playerWins);

const playersWithScore:Player[] = players.map(player => {
    return {...player, score:player.wins-player.losses}
});
console.log(playersWithScore);