/*
List of Product Prices:
Imagine you're working with a list of numbers representing product prices. You want to simplify shopping by finding the lowest price value and creating a new list to manage your shopping strategy.

Organize the prices from lowest to highest.
Make prices visually cleaner by rounding them off (e.g., 123.456 to 123).
Create a new list of items priced under $200.
Offer a 10% discount on the filtered prices and log the final discounted prices(list).
 */

const prices = [199.99, 249.50, 79.99, 12.50, 8.99, 350.75];

// Step 1: Organize the prices from lowest to highest
const sortedPrices = prices.slice().sort((a, b) => a - b);
console.log("Sorted Prices: ", sortedPrices);

// Step 2: Round off the prices to the nearest integer
const roundedPrices = sortedPrices.map(price => Math.round(price));
console.log("Rounded Prices: ", roundedPrices);

// Step 3: Create a new list of items priced under $200
const filteredPrices = roundedPrices.filter(price => price < 200);
console.log("Prices Under $200: ", filteredPrices);

// Step 4: Apply a 10% discount to the filtered prices and log the final discounted prices
const discountedPrices = filteredPrices.map(price => price * 0.9);
console.log("Discounted Prices: ", discountedPrices);
