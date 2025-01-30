//zadatak8

function iterator(arr) {
    let index = 0;
    let nextMethod = {
      next:
          function () {
            if (index < arr.length) {
                let element = arr[index++];
                return [element, index - 1];
            }
            return "Kraj niza!";
          }
    }
    return nextMethod
}


let result = iterator([1, 2, 3, 4, 5]);
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());