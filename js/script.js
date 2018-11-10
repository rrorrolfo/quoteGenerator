
// Quotes array of objects

const quotes = [
  {
    quote: "Try again. Fail again. Fail better.",
    source: "Samuel Beckett"
  },
  {
    quote: "There is scarcely any passion without struggle.",
    source: "Albert Camus",
    citation: "The Myth of Sisyphus and Other Essays"
  },
  {
    quote: "One repays a teacher badly if one always remains nothing but a pupil.",
    source: "Friedrich Nietzsche",
    citation: "Thus Spoke Zarathustra"
  },
  {
    quote: "The world is, of course, nothing but our conception of it.",
    source: "Anton Chekhov"
  },
  {
    quote: "Man is nothing else but what he makes of himself.",
    source: "Jean-Paul Sartre",
    citation: "Existentialism and Human Emotions"
  },
  {
    quote: "if we possess a why of life we can put up with almost any how.",
    source: "Friedrich Nietzsche",
    citation: "Twilight of the Idols"
  },
  {
    quote: "Your positive action combined with positive thinking results in success",
    source: "Shiv Khera"
  },
  {
    quote: "Adopting the right attitude can convert a negative stress into a positive one",
    source: "Hans Selye"
  },
];


// function for selecting a random quote

function getRandomQuote(array) {
  return array[Math.floor(Math.random() * Math.floor(8))];
}


// function to output the selected random quote

function printQuote() {
 let quote = getRandomQuote(quotes); 
 let string = `
 <p class="quote"> ${quote.quote} </p>
 <p class="source"> ${quote.source}
 `
 if (quote.citation) {
  string += `<span class="citation"> ${quote.citation} </span>
  </p>`
 } else {
  string += `</p>`
 }

 document.querySelector("#quote-box").innerHTML =  string;

}

// Event listener for CTA for getting a new quote

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

