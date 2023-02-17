const quoteContainer=document.getElementById('quote-container');
const quote=document.getElementById('quote');
const quoteAuthor=document.getElementById('author');
const loader=document.getElementById('loader');
const nextQuoteBtn=document.getElementById('next-quote')
const tweetQuoteBtn=document.getElementById('tweet-quote')

let apiQuotes=[];
function startLoader(){
    quoteContainer.hidden = true;
    loader.hidden = false;
}
function stopLoader(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}
function getNewQuote(){
    startLoader();
    const randomQuote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    quote.textContent=randomQuote.text;
    quoteAuthor.textContent=randomQuote.author;
    stopLoader();
}
function getQuote(){
    startLoader();
    let apiUrl="https://type.fit/api/quotes";
    setTimeout(()=>{
        fetch(apiUrl)
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        apiQuotes=data;
        console.log(getQuote[1]);
        console.log("my api is working");
        getNewQuote();

    })
    .catch((err)=>{
        console.log(err);
    })
    },500)
    
}
getQuote();
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText}`
    window.open(twitterUrl, "_blank")
}
nextQuoteBtn.addEventListener("click",getNewQuote)
tweetQuoteBtn.addEventListener("click",tweetQuote);
