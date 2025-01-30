//zadatak12

function * simulacijaRazgovora (words) {
    yield * words
}
  
function startGenerator(words) {
    let generator = simulacijaRazgovora(words);

    let intervalId = setInterval(() => {
        let next = generator.next();
        if (next.done) {
            clearInterval(intervalId);
        }
        next.value === "generator" ? console.log("hej") : console.log("besmislica");
        
    }, 3000);
}

let words = ["generator", "hej", "besmilica", "generator", "javascript", "generator"]
startGenerator(words)