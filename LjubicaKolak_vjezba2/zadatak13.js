//zadatak13

async function createSentence (noun) {
    let data = await concatenation(noun);

    setTimeout(() => {
        console.log(data);
    }, 3000);
}

function concatenation(noun) {
    let verb = "studirati"
    return `${verb} ${noun}`;
}

createSentence("računarstvo");