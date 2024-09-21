import { QuoteView } from "./_Quotes";
import { quotes } from "./_data";

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript/7228322#7228322
function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function RandomQuote() {
  const quoteIdx = randomIntFromInterval(0, quotes.length - 1);
  return <QuoteView quote={quotes[quoteIdx]} hideDate />;
}
