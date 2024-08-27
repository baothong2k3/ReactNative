var dolphins1 = [44, 23, 71];
var dolphins2 = [85, 54, 41];
var koalas1 = [65, 54, 49];
var koalas2 = [23, 34, 27];

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// 2. Use the function to calculate the average for both teams
let avgDolphins1 = calcAverage(...dolphins1);
let avgDolphins2 = calcAverage(...dolphins2);
let avgKoalas1 = calcAverage(...koalas1);
let avgKoalas2 = calcAverage(...koalas2);
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console,
// together with the victory points, according to the rule above
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);