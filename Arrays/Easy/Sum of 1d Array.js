let runningSum = function (nums) {
  let arr = [];
  let prev = 0;
  for (let i = 0; i < nums.length; i++) {
    arr.push((prev = prev + nums[i]));
  }
  return arr;
};

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
