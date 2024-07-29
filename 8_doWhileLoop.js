// You are given a number called num. Using a do - while loop, print all the numbers smaller than the number until you reach 0.

function printer(num) {
    // Write your code below this line
    do {
        console.log(num);
        num--;
    } while (num > 0);
}

printer(11); // output : 11 10 9 8 7 6 5 4 3 2 1