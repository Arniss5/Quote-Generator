const url = 'https://type.fit/api/quotes'

async function getQuote() {
    const response = await fetch(url)
    const quoteArray = await response.json()
    console.log(quoteArray)
}

getQuote()