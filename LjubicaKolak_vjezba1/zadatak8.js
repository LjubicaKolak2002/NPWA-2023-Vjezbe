//zadatak8

function unija(arr1, arr2) {
    let result = myReduce(arr2, callbackFun, arr1);
    return result;
}
function myReduce(arr, callbackFun, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = callbackFun(arr[i], acc);
    }
    return acc;
}

function callbackFun(value, acc) {
    if (acc.includes(value) != true) {
        acc.push(value);
    }
    return acc
}

let result = unija([1, -1, 2, -2, 3, -3], [6, 5, 4, 3, 2, 1]);
console.log(result);