const arr = [1, 2, 3, 4, 5];

// =============================================================================================================================================================================================

// The forEach() method calls a function for each element in an array. It does not modify the original array.
let sum = 0;
arr.forEach(element => sum += element);
console.log(sum); // output : 15

// Most of these methods take in a function that can have three parameters, the first one is the actual element, the second is the index of the element and the third is the whole array. These parameters are optional. Here, we only use the first parameter. If we want to get the index as well, we write:
arr.forEach((el, index) => {
    console.log('Running function on element with index ' + index);
});

// =============================================================================================================================================================================================

// The map() method creates a new array from calling a function for every array element. It does not modify the original array. The function we provide can have three parameters, same as last method.
const newArr = arr.map(element => element * 10);
console.log(newArr); // output : [10, 20, 30, 40, 50]

// =============================================================================================================================================================================================

// The find() method returns the value of the first element that passes a test. It does not modify the original array. The function we provide can still have the same three parameters.
const elementThatPasses = arr.find(element => element > 2 && element < 4);
console.log(elementThatPasses); // output : 3

// =============================================================================================================================================================================================

// some() : Checks if any of the elements inside of the array pass a test.
const numsAbove3InArr = arr.some(num => num > 3);
console.log(numsAbove3InArr); //output : true

// =============================================================================================================================================================================================

// every() : Checks if every element inside of the array pass a test
const numsAbove3InArray = arr.every(num => num > 3);
console.log(numsAbove3InArray); // output : false

