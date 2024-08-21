var tip = 0;
var bill1 = 275;
var bill2 = 40;
var bill3 = 430;
// Ternary operator
function calculateTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
console.log(`The bill was ${bill1}, the tip was ${calculateTip(bill1)}, and the total value ${bill1 + calculateTip(bill1)}`);
console.log(`The bill was ${bill2}, the tip was ${calculateTip(bill2)}, and the total value ${bill2 + calculateTip(bill2)}`);
console.log(`The bill was ${bill3}, the tip was ${calculateTip(bill3)}, and the total value ${bill3 + calculateTip(bill3)}`);