document.getElementById('get-joke').addEventListener('click', getCNJoke)
// Get info from https://api.chucknorris.io/
function getCNJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
        .then( respose => { return respose.json() } )
        .then( data => {
            let jokeParagraph = document.getElementById('chuck-norris-joke')
            jokeParagraph.innerHTML = `<p>${data.value}</p>`;
        })
}


document.getElementById("get-design-quote").addEventListener('click', getRandomQuote)
// Get info from https://quotesondesign.com/api/
function getRandomQuote(){
    fetch('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand')
        .then( respose => { return respose.json() } )
        .then( data => {
            console.log(data);
            let randomNum = Math.floor(Math.random() * 10);
            console.log(randomNum)
            let designQuoteWrapper = document.getElementById('random-design-quote')
            designQuoteWrapper.innerHTML = data[randomNum].content.rendered;
        })
}



document.getElementById("get-number-fact").addEventListener('click', getNumberFact)
// Get info from http://numbersapi.com/
function getNumberFact(){
    let randomNum = Math.floor(Math.random() * 100);
    document.getElementById('number').innerHTML = randomNum;
    fetch('http://numbersapi.com/' + randomNum, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then( response => { console.log(response);return response.json() } )
        .then( data => {
            console.log(data)
            let numberFact = document.getElementById('number-fact')
            numberFact.innerHTML = `<p>${data.text}</p>`;;
        })
}


document.getElementById("get-cocktail").addEventListener('click', getCocktail)
// Get info from https://www.thecocktaildb.com/api.php?ref=apilist.fun
function getCocktail(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then( respose => { return respose.json() } )
        .then( data => {
            console.log(data);
            
           let drink = data.drinks[0];
            let cocktailWrapper = document.getElementById('cocktail')
            cocktailWrapper.innerHTML = `<p>${drink.strDrink}</p><p>${drink.strInstructions}</p>`;
        })
}


// Find a random API from https://apilist.fun/ and gert some info onto the screen!