// SELECTORS
const quote = document.getElementById('quote')
const author = document.getElementById('author')

//make the variable global
let quoteArray = [1]


//EVENT LISTENERS



//FUNCTIONS
//get random number

async function getQuoteArray() {
    // get array of quotes from API
    const url = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(url)
        quoteArray = await response.json()
        getQuote()
    }

    catch(error) {
        console.log('That didnt work')
    }
}

function getQuote() {
    const index = Math.floor(Math.random() * quoteArray.length)
    const randomQuote = quoteArray[index]
    console.log(randomQuote)
}

getQuoteArray()





