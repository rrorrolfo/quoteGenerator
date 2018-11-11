
// Quotes array of objects

const quotes = [
  {
    quote: "Try again. Fail again. Fail better.",
    source: "Samuel Beckett",
    tags: "Existentialism"
  },
  {
    quote: "There is scarcely any passion without struggle.",
    source: "Albert Camus",
    citation: "The Myth of Sisyphus and Other Essays",
    tags: "Existentialism"
  },
  {
    quote: "One repays a teacher badly if one always remains nothing but a pupil.",
    source: "Friedrich Nietzsche",
    citation: "Thus Spoke Zarathustra",
    tags: "Existentialism"
  },
  {
    quote: "The world is, of course, nothing but our conception of it.",
    source: "Anton Chekhov",
    tags: "Existentialism"
  },
  {
    quote: "Man is nothing else but what he makes of himself.",
    source: "Jean-Paul Sartre",
    citation: "Existentialism and Human Emotions",
    tags: "Existentialism"
  },
  {
    quote: "if we possess a why of life we can put up with almost any how.",
    source: "Friedrich Nietzsche",
    citation: "Twilight of the Idols",
    tags: "Existentialism"
  },
  {
    quote: "Your positive action combined with positive thinking results in success",
    source: "Shiv Khera",
    tags: "Positive mind"
  },
  {
    quote: "Adopting the right attitude can convert a negative stress into a positive one",
    source: "Hans Selye",
    tags: "Positive mind"
  },
];


// function for selecting a random quote

const getRandomQuote = array => array[Math.floor(Math.random() * Math.floor(8))];


// function for creating a random background color

const randomBC = () => {

  let rgb = 'rgb(' + Math.floor(Math.random() * Math.floor(255)) + ',' + Math.floor(Math.random() * Math.floor(255)) + ',' + Math.floor(Math.random() * Math.floor(255)) + ')';

  return rgb
}




// function to output the selected random quote

const printQuote = () => {
 let quote = getRandomQuote(quotes); 
 let string = `
 <p class="quote"> ${quote.quote} </p>
 <p class="source"> ${quote.source}
 `
 if (quote.citation) {
  string += `<span class="citation"> ${quote.citation} </span>
  `
 } 

 if (quote.tags) {
  string += `<span class="citation"> ${quote.tags} </span>
  </p>`
 } else {
  string += `</p>`
 }

 document.querySelector("#quote-box").innerHTML =  string;
 document.querySelector("body").style.backgroundColor = randomBC();

}

// Timer function

const refresh_quote = () => {
  window.setInterval(printQuote, 20000);
}

refresh_quote();


// Event listener for CTA for getting a new quote

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

