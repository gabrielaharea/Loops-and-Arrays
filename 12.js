//12
function numberPrim(number) {
  let divizor = 0;
  for (i = 1; i <= number; i++) {
    if (number % i == 0) {
      divizor ++;
    }
  }
  if (divizor > 2) {
    return false;
  } else {
    return true;
  }
};

console.log(numberPrim(4));
