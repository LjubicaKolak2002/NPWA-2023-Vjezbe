//zadatak11

function* iterator(string) {
    let words = string.split(/\s+/);
    for (word of words) {
        yield word;
    }
}

let result = iterator("napredno programiranje web aplikacija");
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());