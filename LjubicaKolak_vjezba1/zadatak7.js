//zadatak7

function presjek(arr1, arr2) {
    let result = myReduce(arr1, callbackFun, arr2, []);
    return result;
}

function myReduce(arr, callbackFun, arr2, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = callbackFun(arr[i], acc, arr2);
    }
    return acc;
}

function callbackFun(value, acc, arr2) {
    if ((acc.includes(value) !== true) && (arr2.includes(value))) {
        acc.push(value);
    }
    return acc;
}

let arr1 = [1, -1, 2, -2, 3, -3];
let arr2 = [6, 5, 4, 3, 2, 1];
let result = presjek(arr1, arr2);
console.log(result);
