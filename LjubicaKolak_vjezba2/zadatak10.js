//zadatak10

function iterator(string) {
    let index = 0;
    let words = string.split(/\s+/);
  
    let nextMethod =  {
        next:
            function () {
                if (index < words.length) {
                    return words[index++];
                }
                return "KRAJ!"
            }
    }
    return nextMethod;
}

let result = iterator("napredno programiranje web aplikacija")
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());