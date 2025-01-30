//zadatak1

function vecina(arr, callbackFun) {
    let cntTrue = 0;
    let cntFalse = 0;
    for (let i = 0; i < arr.length; i++) {
        (callbackFun(arr[i])) ? cntTrue++: cntFalse++;
    }
    return (cntTrue <= cntFalse) ? false: true;

}

function callbackFun(value) {
    if (value) {
        return true;
    }
    else {
        return false;
    }

}

let result = vecina([1, 2, null, 0, undefined, "string", -0, 11, "js"], callbackFun);
console.log(result)