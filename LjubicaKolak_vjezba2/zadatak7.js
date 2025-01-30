//zadatak7

function blackJack(arr) {
    function dealer(num1, num2) {
        let flag = false;
        let sum = 0;

        function player() {
            if (!flag) {
                flag = true;
                sum = num1 + num2;
                return sum;
            } 
            else {
                if (sum <= 21) {
                    first_element = arr.shift();
                    sum += first_element;
                    if (sum <= 21) {
                        return sum;
                    }
              
                    if (sum > 21) {
                        return "bust!";
                    }
                }
                else {
                    return "You are done!";
                }
            }
        }
        return player;
    }
    return dealer;
}

let dealer = blackJack([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
let player = dealer(5, 5);
console.log(player()); 
console.log(player()); 
console.log(player()); 
console.log(player()); 
console.log(player()); 
console.log(player()); 
console.log(player()); 
console.log(player());
