// SELECTORS
const quote = document.getElementById('quote-text')
const author = document.getElementById('author')
const nextBtn = document.getElementById('new-quote')
const twitterBtn = document.getElementById('twitter')

//make the variable global
let quoteArray = [1]


//EVENT LISTENERS
getQuoteArray()
nextBtn.addEventListener('click', getQuote)
twitterBtn.addEventListener('click', tweetQuote)


//FUNCTIONS

async function getQuoteArray() {
    // get array of quotes from API
    const url = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(url)
        quoteArray = await response.json()
        //Get quote on load
        getQuote()
        
    }

    catch(error) {
        console.log('That didnt work')
    }
}

// get random quote from the array
function getQuote() {
    const index = Math.floor(Math.random() * quoteArray.length)
    const randomQuote = quoteArray[index]
    //make font size of long quotes smaller
    quote.innerText = randomQuote.text
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





