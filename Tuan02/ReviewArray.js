// map
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = numbers1.map(myFunction);
function myFunction(value, index, arr) {
    return value * 2;
}
console.log(numbers2); // [2, 4, 6, 8, 10]
// flatMap
const numbers3 = [1, 2, 3, 4, 5];
const numbers4 = numbers3.flatMap((x) => [x * 2]);
console.log(numbers4); // [2, 4, 6, 8, 10]
// filter
const numbers5 = [1, 2, 3, 4, 5];
const numbers6 = numbers5.filter(checkNumber);
function checkNumber(value) {
    return value > 3;
}
console.log(numbers6); // [4, 5]
// reduce
const numbers7 = [1, 2, 3, 4, 5];
const sum = numbers7.reduce(myFunc);
function myFunc(total, value) {
    return total + value;
}
console.log(sum); // 15
// some
const numbers8 = [45, 4, 9, 16, 25];
let someOver18 = numbers8.some(myFunction);

function myFunction(value) {
    return value > 18;
}
console.log(someOver18); // true
// every
const numbers9 = [45, 4, 9, 16, 25];
let allOver18 = numbers9.every(myFunction);
function myFunction(value) {
    return value > 18;
}
console.log(allOver18); // false
// find
const numbers10 = [45, 4, 9, 16, 25];
let firstOver18 = numbers10.find(myFunction);
function myFunction(value) {
    return value > 18;
}
console.log(firstOver18); // 45
// sort
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
// reverse (đảo ngược mảng)
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.reverse();
console.log(fruits2); // ["Mango", "Apple", "Orange", "Banana"]
// toSort (sắp xếp mảng mà không thay đổi mảng gốc)
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
const sortedFruits = fruits3.sort();
console.log(sortedFruits); // ["Apple", "Banana", "Mango", "Orange"]
// toReverse (đảo ngược mảng mà không thay đổi mảng gốc)
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
const reversedFruits = fruits4.reverse();
console.log(reversedFruits); // ["Mango", "Apple", "Orange", "Banana"]