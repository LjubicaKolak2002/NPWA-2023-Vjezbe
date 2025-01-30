//zadatak5

function pipe(arr, value) {
    let result = value; //trenutni rezultat
    for (i of arr) {
        result = i(result);
    }
    return result

}

function callbackFun1(value) {
    return value + 2;
}

function callbackFun2(value) {
    return value * 2;
}

function callbackFun3(value) {
    return value + 1;
}

function callbackFun4(value) {
    return value - 1;
}

//value = 3
//result = 10
let result = pipe([callbackFun1, callbackFun2, callbackFun3, callbackFun4], 3);
console.log(result);