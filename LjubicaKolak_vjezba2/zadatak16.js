//zadatak16

let thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise has been resolved!");
    }, 1000);
});
  

thirdPromise.then((value) => console.log(value));
console.log("I'm not the promise!");

//prvo se ispisuje "I'm not the promise, a nakon toga se ispisuje "Promise has been resolved" kada se promise riješi