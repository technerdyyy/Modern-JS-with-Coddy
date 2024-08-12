/*
You are given a function called pyramids that takes in a parameter called height. You need to complete the code inside the function to make it print pyramids as shown above. A pyramid of height 3 would look like:

  #  #
 ##  ##
###  ###
*/

function pyramids(height) {
    for (let i = 1; i <= height; i++) {
        // Calculate the number of leading spaces
        const spaces = ' '.repeat(height - i);
        // Create the pyramid row
        const row = spaces + '#'.repeat(i) + ' ' + '#'.repeat(i);
        console.log(row);
    }
}

// Example usage:
pyramids(3);
