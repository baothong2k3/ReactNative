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
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
console.log('Data01:');
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}
console.log('Data02:');
if (markHigherBMI1) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
console.log('Data01:');
if (markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
console.log('Data02:');
if (markHigherBMI1) {
    console.log(`Mark's BMI (${BMIMark1}) is higher than John's (${BMIJohn1})!`);
} else {
    console.log(`John's BMI (${BMIJohn1}) is higher than Mark's (${BMIMark1})!`);
}