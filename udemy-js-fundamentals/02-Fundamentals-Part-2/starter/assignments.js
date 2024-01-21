//JavaScript Fundamentals – Part 2
//Coding Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//Data 1
// const avgDolphins = calcAverage (44, 23, 71 );
// const avgKoalas = calcAverage (65, 54, 49 );

//Data 2
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

//Data 3
const scoreDolphins = calcAverage (10, 10, 10 );
const scoreKoalas = calcAverage (10, 10, 10 );

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
}

checkWinner(avgDolphins, avgKoalas);




