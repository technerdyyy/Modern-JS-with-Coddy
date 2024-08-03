// You are given two arrays arr1 and arr2. Your job is to find the union of these two arrays. For example, the union of [1, 2, 3] and [100, 2, 1, 10] is [1, 2, 3, 100, 10]. Basically, your job is to create a new third array and store every different number from both arrays. Make sure not to have duplicates. Looping through arrays and using the .includes() method might help you.

function unionArrays(arr1, arr2) {
  let unionArray = [];

  // Adding all elements of arr1 to unionArray if they are not already present
  for (let i = 0; i < arr1.length; i++) {
    if (!unionArray.includes(arr1[i])) {
      unionArray.push(arr1[i]);
    }
  }

  // Adding all elements of arr2 to unionArray if they are not already present
  for (let i = 0; i < arr2.length; i++) {
    if (!unionArray.includes(arr2[i])) {
      unionArray.push(arr2[i]);
    }
  }

  return unionArray;
}


let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];

let result = unionArrays(arr1, arr2);
console.log(result); // Output: [1, 2, 3, 100, 10]
