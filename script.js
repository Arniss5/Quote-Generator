// SELECTORS
const quoteContainer = document.getElementById('quote-container')
const quote = document.getElementById('quote-text')
const author = document.getElementById('author')
const nextBtn = document.getElementById('new-quote')
const twitterBtn = document.getElementById('twitter')
const loader = document.querySelector('.loader')

//make the variable global
let quoteArray = []

//get first quote on load
getQuoteArray()


//EVENT LISTENERS

nextBtn.addEventListener('click', getQuote)
twitterBtn.addEventListener('click', tweetQuote)


//FUNCTIONS

async function getQuoteArray() {
    // get array of quotes from API
    const url = 'https://type.fit/api/quotes'
    addLoader()
    try {
        const response = await fetch(url)
        quoteArray = await response.json()
        //Get quote on load
        getQuote()
        
    }
    // handle error: use local file
    catch(error) {
        console.log('Error thrown while fetching API, using local file')
        quoteArray = localQuotes
        getQuote()
    }
}

// get random quote from the array
function getQuote() {
    addLoader()
    const index = Math.floor(Math.random() * quoteArray.length)
    const randomQuote = quoteArray[index]
    
    removeLoader()
    quote.innerText = randomQuote.text
    //make font size of long quotes smaller
    if (randomQuote.text.length > 120) {
        quote.classList.add('long-quote')
    } else {
        quote.classList.remove('long-quote')
    }
    //in case of no author, display 'Anonymous'
    author.innerText = randomQuote.author ? randomQuote.author : 'Anonymous'
}

//tweet current quote
function tweetQuote() {
    const href = `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`
    window.open(href, '_blank')
}

//loader 
function addLoader() {
    loader.hidden = false
    quoteContainer.hidden = true
}

function removeLoader() {
    loader.hidden = true
    quoteContainer.hidden = false
}






