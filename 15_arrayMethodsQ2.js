// Write a function named numbersArray that gets an array of numbers and returns the seventh element in the array.

function numbersArray(arr) {

  if (arr.length >= 7) {
    return arr[6]; //
  } else {
    return "Array does not have 7 elements"; 
  }
}

const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbersArray(exampleArray)); // Outputs: 7
