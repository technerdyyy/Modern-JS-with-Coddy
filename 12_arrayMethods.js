let arr = ['a', 'b', 'd', 'c'];

//.includes() : used to check whether the array contains a certain element  
console.log(arr.includes('f'));
// output : false

//==============================================================================================================================================================================================

//.indexOf() : used when we need to find the index of a specific element. If there are multiple of the same elements, it returns the first index. If the element we are searching for doesn't exist in the array, it returns -1
const index = arr.indexOf('d');
console.log(index);

//==============================================================================================================================================================================================

//.reverse() : used to reverse an array
console.log(arr.reverse());

//==============================================================================================================================================================================================

//.fill() : used to fill an array with a value. We can also specify a range to be filled, instead of the whole array
arr.fill('Hi');
// Output: ['Hi', 'Hi', 'Hi', 'Hi'];

arr.fill('Hi', 1, 3);
// Output: ['a', 'Hi', 'Hi', 'c'];

//==============================================================================================================================================================================================

//.isArray() : static method of the Array class
const variableIsArray = Array.isArray(arr);
console.log(variableIsArray);

//==============================================================================================================================================================================================

//.splice() : used to add or remove elements from an array within a range of indexes
  
// Adding elements:
arr.splice(2, 1, 'f', 'g'); // This means add 2 elements starting from index 1 and the elements should be 'f' and 'g'.
// Output: ['a', 'f', 'g', 'b', 'd', 'c'];

// Removing elements
arr.splice(1, 2); // This means starting at index 1, remove 2 elements.
// Output: ['a', 'c']

//==============================================================================================================================================================================================

// .sort() : used to sort an array. It sorts strings AND numbers alphabetically. This means 25 would still be bigger than 100 because '2' is bigger than '1' alphabetically
arr.sort();
console.log(arr);