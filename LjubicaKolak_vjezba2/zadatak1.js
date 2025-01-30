//zadatak1

function returnAfter(n, callbackFun) {
    function after() {
        n--;
        (n >= 0) ? console.log("AFTER"): callbackFun();
    }
    return after;
}

function callbackFun() {
    console.log("CALLBACK");
}

let result = returnAfter(3, callbackFun);
result();
result();
result();
result();
result();