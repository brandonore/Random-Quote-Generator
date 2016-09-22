// Event listener to respond to "Show another quote" button clicks
// When user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Create a quotes array of objects to hold our quotes and properties
var quotes = [
    {quote: "Success is going from failure to failure without losing your enthusiasm.", source: "Winston Churchill", citation: "How to Say a Few Words", year: 1953},
    {quote: "If there is no struggle, there is no progress.", source: "Frederick Douglass", citation: "West India Emancipation", year: 1857},
    {quote: "Obsessed is just a word the lazy use to describe the dedicated", source: "Russell Warren"},
    {quote: "The way to get started is to quit talking and begin doing", source: "Walt Disney"},
    {quote: "Creativity is intelligence having fun", source: "Albert Einstein"}
];

// Returns a random quote from the quotes array
function getRandomQuote () {
    return quotes[Math.floor(Math.random()*quotes.length)];
}

// Print a built up string
function printQuote () {

    // Call the getRandomQuote function and store it in a variable
    var rQuote = getRandomQuote();

    // Begin building up our message string and grabbing values from the quote object
    var message = '<p class="quote">' + rQuote.quote + '</p>';
    message += '<p class="source">' + rQuote.source;

    // Check the quote object to see if it contains a 'citation' or 'year' property/key
    // If it does, add the <span> tag to the message string
    if(rQuote.hasOwnProperty("citation")) {
      message += '<span class="citation">' + rQuote.citation + '</span>';
    }
    if (rQuote.hasOwnProperty("year")) {
      message += '<span class="year">' + rQuote.year + '</span></p>';
    }

    // Target the 'quote-box' div in the index.html file and replace the child content with our new string
    document.getElementById('quote-box').innerHTML = message;
}
