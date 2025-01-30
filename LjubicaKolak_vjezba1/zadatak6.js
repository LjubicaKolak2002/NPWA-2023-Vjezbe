//zadatak6

function myReduce(arr, callbackFun, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = callbackFun(arr[i], acc);
    }
    return acc;
}

function callbackFun(value, acc) {
    return value + acc;
}

let result = myReduce([1, 2, 3, 4, 5], callbackFun, 0);
console.log(result);