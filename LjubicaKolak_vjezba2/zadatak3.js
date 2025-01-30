//zadatak3

function numSelectString(arr) {
    let filteredArr = arr.filter(num => num % 2 !== 0);
    let sortedArr = filteredArr.sort((num1, num2) => num1 - num2);
    let result = sortedArr.reduce((num1, num2) => num1 +', '+ num2);
    return result;
}

let arr = [17, 34, 3, 12, 23];
console.log(numSelectString(arr));