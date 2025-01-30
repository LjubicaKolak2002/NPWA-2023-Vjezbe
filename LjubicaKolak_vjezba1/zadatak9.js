//zadatak9

function myFilter(arr, callbackFun) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callbackFun(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;

}

function callbackFun(value) {
    if (value % 5 === 0) {
        return true;
    }
    else {
        return false;
    }
}

let result = myFilter([3, 15, 12, 14, 20, -10, 8, 9, 35], callbackFun);
console.log(result);