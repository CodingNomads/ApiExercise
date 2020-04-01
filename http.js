// Create click listener for get joke button
document.getElementById('get-joke').addEventListener("click", getCNJoke)
// Get info from https://api.chucknorris.io/ and put it on page
function getCNJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
        .then( response => response.json() )
        .then( dataObj => {
            console.log(dataObj);
            let jokeWrapper = document.getElementById('chuck-norris-joke');
            jokeWrapper.innerHTML = `<p>${dataObj.value}</p>`
            
        })
}

// Create click listener for get design quote button
document.getElementById('get-design-quote').addEventListener("click", getRandomQuote)
// Get info from https://quotesondesign.com/api/ and get it on page
function getRandomQuote(){
    fetch('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand')
        .then(res => res.json())
        .then( dataArr => {
            console.log(dataArr)
            let randomNumber = Math.floor(Math.random() * 10);
            console.log(randomNumber)
            let designQuoteWrapper = document.getElementById('random-design-quote');
            designQuoteWrapper.innerHTML = dataArr[randomNumber].content.rendered;
        })
}


// Create Click listener for get number fact button 
document.getElementById('get-number-fact').addEventListener("click", getNumberFact)
// Get info from http://numbersapi.com/ and get on page
function getNumberFact(){
    let randomNumber = Math.floor(Math.random() * 101);
    document.getElementById('number').innerHTML = randomNumber;
    fetch('http://numbersapi.com/' + randomNumber, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then( res => res.json() )
        .then( data => console.log(data))
}

// Create Click listener for cocktail button

// Get info from https://www.thecocktaildb.com/api.php?ref=apilist.fun



// Find a random API from https://apilist.fun/ and get some info onto the screen!