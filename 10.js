//10
const numBers = [1,-2,3,-4,5];

function sortNumbers (nums) {
  let numPositiv = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      numPositiv.push(nums[i]);
    }
  }

  return numPositiv;
}

console.log(sortNumbers(numBers));
