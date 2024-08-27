// MSSV: 21014091
// Ho va ten: Dang Bao Thong
// Description: Coding Challenge #2
// 1. Create a function 'calcTip' to calculate the tip
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was 100, the tip was ${calcTip(100)}`);
// 2. Create an array 'bills' containing the test data
const bills = [125, 555, 44];
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
// 4. Create an array 'total' containing the total value, so the bill + tip
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);