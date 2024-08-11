/*
You are given a function called pyramid that takes in a parameter called height. You need to complete the code inside the function to make it print a pyramid as shown above. A pyramid of height 3 would look like:

  #
 ##
###

*/
function pyramid(height) {
    // Write your code below this line
    for (let i = 1; i <= height; i++) {

        let spaces = ' '.repeat(height - i);
        
        let hashes = '#'.repeat(i);

        console.log(spaces + hashes);
    }
    
}

