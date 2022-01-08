var shuffle = function (nums, n) {
  let arr = [];
  let result = [];
  arr = nums.slice(n);
  for (let i = 0; i <= n - 1; i++) {
    result.push(nums[i], arr[i]);
  }
  return result;
};
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
