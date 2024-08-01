// You are given an array called numbers. Print the last 5 elements of the array using a for loop.

function printLastFiveElements(numbers) {
    let start = Math.max(numbers.length - 5, 0);
    for (let i = start; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Replace this with your array
printLastFiveElements(numbers);
// Output will be 6 7 8 9 10
