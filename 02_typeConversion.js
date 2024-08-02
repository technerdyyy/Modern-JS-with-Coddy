/*Converting to a String
Converting values to a string looks like this: */

let value = '';

value = String(55); // Value is: '55'.
value = String(true); // Value is: 'true'.
value = String(5 + 20); // Value is: '25'.

/*We can also use the toString() method to convert to a String: */
let number = 25;
let string = number.toString();

/*Converting to a Number
Similar to converting to a string, converting to a number looks like this: */

let value1 = 0;
value1 = Number('5'); // Value is: 5.
value1 = Number(true); // Value is: 1.
value1 = Number(false); // Value is: 0.
value1 = Number(null); // Value is: 0.
value1 = Number('Hello, World!'); // Value is: NaN.

/*Whenever converting to a number, we can get the value NaN. NaN means 'Not a Number' and we get NaN whenever we try to turn something that can't be a number into a number.

We can also use the parseInt() and parseFloat() functions: */
const someNumber = parseInt('100'); // Value is: 100.
const otherNumber = parseInt('100.25'); // Value is: 100.
const anotherNumber = parseFloat('100.25'); // Value is 100.25.

/*We use parseInt() for whole numbers and parseFloat() for numbers with decimal places. */