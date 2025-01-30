//zadatak9

function numSelectString(arr) {
    let filterArr = arr.filter(num => num % 2 !== 0);
    let sortedArr = filterArr.sort((a, b) => a - b);
    
    let index = 0;
    let nextMethod =  {
        next:
            function () {
                if (index < sortedArr.length - 1) {
                    return {value: sortedArr[index++], done:false};
                }
                else if (index === sortedArr.length - 1){
                    return {value: sortedArr[index++], done:true};
                }
                else {
                    return {done: true};
                }
            }
    }
    return nextMethod;
}

let result = numSelectString([17, 34, 3, 12, 23]);
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());