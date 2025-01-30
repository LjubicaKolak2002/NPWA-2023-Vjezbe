//zadatak2

function movieSelector(arrObject) {
    let fiteredArr = arrObject.filter(movie => movie.score > 5);
    let mapedArr = fiteredArr.map(movie => movie.title.toUpperCase());
    return mapedArr;
}

let movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 },
            { id: 37, title: "Gentelman", score: 6 },
            { id: 11, title: "Batman", score: 5 },
            { id: 44, title: "Birds of Pray", score: 1 },];

console.log(movieSelector(movies));