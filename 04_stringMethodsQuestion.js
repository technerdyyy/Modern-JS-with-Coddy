// You are given a variable of type string called 'myString'. First, print the length of the string. Then, try to find a way to print the last character of the string. At the end, print the first 3 letters of the string.

function strings(myString) {
    // Write your code below this line
    console.log(myString.length);
    console.log(myString.charAt(myString.length - 1));
    console.log(myString.substring(0, 3));
}

strings("JavaScript");