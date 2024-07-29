// You are given a number called num. Your job is to count the number of digits the number consists of using a while loop. Try using a counter to count the iterations while using math to get rid of the last digit of the number every iteration. The iterations should stop once you get through all digits of the number.

function digits(num) {
    // Write your code below this line
    let count=0;
  while(num!=0){
    num=Math.floor(num/10);
    count++;
  }
  console.log(count);
}

digits(3661); // output : 4