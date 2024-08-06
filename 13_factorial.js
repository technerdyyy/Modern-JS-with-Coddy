// Write the code for the function factorial that calculates the factorial of a number. If you don't know what factorial is, factorial means the product of the number and all numbers below it. For example, 5 factorial would be: 5 * 4 * 3 * 2 * 1 = 120. Use recursion. Your function should return the value. No need to print it, return values are tested automatically.

function factorial(n) {
    // Base case: 
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: 
    return n * factorial(n - 1);
}

let result = factorial(5);
console.log(result);
