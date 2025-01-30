//zadatak2

function prioritiziraj(arr, callbackFun) {
    let arrTrue = [];
    let arrFalse = [];
    for (let i = 0; i < arr.length; i++) {
        (callbackFun(arr[i])) ? arrTrue.unshift(arr[i]) : arrFalse.unshift(arr[i]);
    }
    return [...arrTrue, ...arrFalse];
}

function callbackFun(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

let result = prioritiziraj([1, 2, 3, 4, 5, 6], callbackFun);
console.log(result);