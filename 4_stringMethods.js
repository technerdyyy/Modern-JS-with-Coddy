const someString = 'This is some text.';
value = someString.length // Output: 18

const firstName = "John";
const lastName = "Williams";
value = firstName.concat(' ', lastName); // concatenating with a method
console.log(value); // output: John williams

value = someString.toUpperCase(); // Output: "THIS IS SOME TEXT."
value = someString.toLowerCase(); // Output: "this is some text."

//Getting index of a letter
value = someString.indexOf('s'); // Output: 3

//Getting character from index
value = someString.charAt(1) // Output: h

value = someString.substring(0, 3) // Output: "Thi"

value = someString.replace('This', 'That'); // Output: "That is some text."

value = someString.includes('foo'); // Output: false

