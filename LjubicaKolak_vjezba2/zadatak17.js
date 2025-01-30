//zadatak17

const fakePeople = [
    { name: 'Ivo', hasPets: false},
    { name: 'Eva', hasPets: true},
    { name: 'Marko', hasPets: true}
]

function printPromise(value) {
    console.log(value);
}

function fakeAPICall(i) {

    return new Promise((resolve, reject) => {
        if (i > 3) {
            reject ("I mora biti manji ili jednak 3!");
        }
        resolve(fakePeople[i - 1]);

    }, Math.random() * (3000 - 1000) + 1000)
}

fakeAPICall(3).then(printPromise)
let first = fakeAPICall(3)
let second = fakeAPICall(2)
let third = fakeAPICall(1)


function getAllData() {
    return Promise.all([first, second, third]);
}

let allPromises = getAllData()
allPromises.then(printPromise)