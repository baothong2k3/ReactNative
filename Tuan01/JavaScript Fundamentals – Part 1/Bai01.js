// 1. Store Mark's and John's mass and height in variables
let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

let weightMark1 = 95;
let heightMark1 = 1.88;
let weightJohn1 = 85;
let heightJohn1 = 1.76;
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
let BMIMark = weightMark / heightMark ** 2;
let BMIJohn = weightJohn / heightJohn ** 2;

let BMIMark1 = weightMark1 / (heightMark1 * heightMark1);
let BMIJohn1 = weightJohn1 / (heightJohn1 * heightJohn1);
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let markHigherBMI = BMIMark > BMIJohn;
let markHigherBMI1 = BMIMark1 > BMIJohn1;
console.log("Data01: ");
console.log(markHigherBMI);
console.log(BMIMark, BMIJohn);
console.log("Data02: ");
console.log(markHigherBMI1);
console.log(BMIMark1, BMIJohn1);