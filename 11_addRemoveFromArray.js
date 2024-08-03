/* .push() : to add an element at the end of an array
   .unshift() : to add an element to the beginning of an array. 
   .pop() : This removes the last element of the array.
   .shift() : to remove an element from the beginning of an array.
*/

//Question :
/*You are given two arrays, nums1 and nums2. Your job is to get the last element of nums1 and insert it as the first element of nums2. Remove the last element of nums1. Print nums1, then print nums2. */

let nums1 = [1, 2, 3, 4]; 
let nums2 = [5, 6, 7, 8]; 

// Step 1: Get the last element of nums1
let lastElement = nums1[nums1.length - 1];

// Step 2: Remove the last element of nums1
nums1.pop();

// Step 3: Insert the element as the first element of nums2
nums2.unshift(lastElement);

// Step 4: Print nums1 and nums2
console.log('nums1:', nums1);
console.log('nums2:', nums2);
