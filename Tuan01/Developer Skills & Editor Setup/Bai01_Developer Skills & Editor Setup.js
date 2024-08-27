// MSSV: 21014091
// Ho va ten: Dang Bao Thong
// Description: Coding Challenge #1
function printForecast(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days... `;
    }
    console.log('...' + str);
}
const arr1 = [17, 21, 23];
printForecast(arr1);
const arr2 = [12, 5, -5, 0, 4];
printForecast(arr2);