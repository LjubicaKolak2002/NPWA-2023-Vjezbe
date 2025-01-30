//zadatak15

function printPromise(value) {
    console.log(value);
}

let secondPromise = new Promise((resolve, reject) => {
    reject("Error");
});
  

secondPromise.catch(printPromise);