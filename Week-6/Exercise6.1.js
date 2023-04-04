let maxSubArray = (nums) => {
  let mixInt = Math.pow(2, 53);
  let maxSoFar = -mixInt - 1;
  let maxOfEnd = 0;

  for (let x of nums) {
    maxOfEnd = x + maxOfEnd;
    if (maxSoFar < maxOfEnd) {
      maxSoFar = maxOfEnd;
    }
    if (maxOfEnd < 0) {
      maxOfEnd = 0;
    }
  }
  return maxSoFar;
};

console.log(maxSubArray([1, 2, 3, 4, -10]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
