/* Imagine having a basket full of candies of different colors. 
Create an array named candyBasket containing five candies: "red", "orange", "yellow", "green", "blue".
Write JavaScript code to determine and log the color of the candy in the middle of the basket based on its index. */


const candyBasket = ["red", "orange", "yellow", "green", "blue"];
const middleIndex = Math.floor(candyBasket.length / 2);
const middleCandyColor = candyBasket[middleIndex];
console.log(middleCandyColor); // Outputs: "yellow"

