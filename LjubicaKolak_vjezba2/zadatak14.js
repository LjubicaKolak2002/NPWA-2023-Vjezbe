//zadatak14

function printPromise(value) {
    console.log(value);
}

let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved");
    }, 1000);
});
  

firstPromise.then(printPromise)