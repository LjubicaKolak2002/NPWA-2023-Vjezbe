//zadatak3

function grupiraj(arr, callbackFun) {
    let arrTrue = [];
    let arrFalse = [];
    let object = new Object();
    for (let i = 0; i < arr.length; i++) {
        if (callbackFun(arr[i])) {
            arrTrue.push(arr[i]);
            object[callbackFun(arr[i])] = arrTrue;
            //console.log("T", arrTrue);
        }
        else {
            arrFalse.push(arr[i]);
            object[callbackFun(arr[i])] = arrFalse
            //console.log("F", arrFalse);
        }

    }
    return object;

}

function callbackFun(value) {
    if (value > 0 && value < 10) {
        return true;
    }
    else {
        return false;
    }
}

let result = grupiraj([1, -3, 7, 9, 10, 12], callbackFun);
console.log(result);