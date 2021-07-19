//13
function sumOfDigits(num){
  let sum = 0;
   let digit = 0;
   while(num !== 0) {
    digit = num % 10;
     sum += digit;
     num  = Math.floor(num / 10);
   }
   
   return sum;
 }
 
 console.log(sumOfDigits(666));
 