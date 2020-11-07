import React, { useEffect } from "react";

function Random() {
  //   const randomFacts = [
  //     "One Oyster can filter 50 gallons of water a day.",
  //     "Oysters absorb 76 to 93 percent of wave energy, which reduces erosion, and flooding during storms.",
  //     "Thanks to modern food safety, the 'R' policy no longer applies.",
  //   ];
  useEffect(( ) => {
    var myVar = setInterval(myTimer, 10000);
    return () => {
      clearInterval(myVar)
    }
  }, [])
  const randomFacts = [
    "Oysters contain a variety of vitamins and nutrients Oysters are a source of vitamins A, B1 (thiamine), B2 (riboflavin), B3 (niacin), C (ascorbic acid) and D (calciferol). 6 oysters would also more than meet the daily recommended intake of iron, copper, iodine, magnesium, calcium, zinc, manganese and phosphorous. zinc, calcium, magnesium, protein, selenium, and vitamin A.",
    "One Oyster can filter 50 gallons of water a day.",
    "Oysters absorb 76-93% of wave energy, which reduces erosion, and flooding during storms.",
    'Oysters have been around for 180 million years and Neolithic man consumed vast quantities some five thousand years ago.',
    "Thanks to modern food safety, the 'R' policy no longer applies.",
    "Oysters are an excellent source of Vitamin B12.",
    "Why don't oysters share their pearls? Because they are shellfish.",
    "What is an oyster's favorite band? Pearl Jam.",
    'An oyster can filter 1.3 gallons of water per hour.',
    'It’s not so much the species, but the location that gives oysters their flavor.',
    'Oysters have been around for approximately 15 million years.',
    'Oysters are vegetarians. They eat algae by filtering it out of the water.',
    'Most Oysters Found in Restaurants Are Farmed.'
  ];
  function myTimer() {
    let randomNum = [Math.floor(Math.random() * Math.floor(randomFacts.length))];
    console.log(randomNum);
console.log(randomFacts[randomNum]);
    let randomQuote = (randomFacts[randomNum]);
    document.querySelector('#demo').textContent = randomQuote
  }

  return (
    <section>
      <p></p>
      <span id="demo"></span>
    </section>
  );
}

export default Random;
