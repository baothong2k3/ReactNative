// MSSV: 21014091
// Ho va ten: Dang Bao Thong
// Description: Coding Challenge #3
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69
};
const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95
};
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
const calcBMI = (mass, height) => mass / height ** 2;
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Mark.BMI = calcBMI(Mark.mass, Mark.height).toFixed(1);
John.BMI = calcBMI(John.mass, John.height).toFixed(1);
const higherBMI = (Mark, John) => Mark.BMI > John.BMI ? console.log(`Mark's BMI ${Mark.BMI} is higher than John's ${John.BMI}!`) : console.log(`John's BMI ${John.BMI} is higher than Mark's ${Mark.BMI}!`);
higherBMI(Mark, John);