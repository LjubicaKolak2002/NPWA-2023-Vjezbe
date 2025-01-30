//zadatak6

function russianRoulette(n) {
    let cnt = 0;
    function returnString() {
        cnt++;
        if (cnt < n) {
            return "click!";
        }
        else if (cnt === n) {
            return "bang";
        }
        else {
            return "reload to play again";
        }
    }
    return returnString;
}

let result = russianRoulette(4);
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());