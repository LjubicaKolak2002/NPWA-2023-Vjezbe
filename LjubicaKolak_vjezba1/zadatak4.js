//zadatak4

function komutativnost(callbackFun1, callbackFun2, value) {
    result1 = callbackFun2(callbackFun1(value));
    result2 = callbackFun1(callbackFun2(value));
    //console.log(result1, result2)

    return (result1 === result2) ? true: false;

}

function callbackFun1(value) {
    return value * 2;
}

function callbackFun2(value) {
    return value * 3;
}

let result = komutativnost(callbackFun1, callbackFun2, 4);
console.log(result);
