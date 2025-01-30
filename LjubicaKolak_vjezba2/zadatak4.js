//zadatak4

function elementsSum(arr) {
    let sum = 0;
    for (element of arr) {
        sum += element;
    }
    return sum;
}

console.log(elementsSum([1, -2, 0, -5, 9]));