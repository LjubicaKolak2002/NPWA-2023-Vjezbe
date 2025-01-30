//zadatak5

function iterator(arr) {
    let cnt = 0;
    function concatString() {
        if (cnt < arr.length) {
            let result = `${arr[cnt]} je ${[cnt]}. element niza`;
            cnt++;
            return result;
        }
        else {
            return "Kraj niza";
        }

    }
    return concatString;

}

let result = iterator([1, 2, 3, 4, 5]);
console.log(result());
console.log(result());
console.log(result())
console.log(result());
console.log(result());
console.log(result());
console.log(result());