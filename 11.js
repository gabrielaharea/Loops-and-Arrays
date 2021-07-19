//11
const numBers = [1,-2,19,-4,5];

function findMaximalNumber(nums) {
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
    }
  }

  return max;
}

console.log(findMaximalNumber(numBers));