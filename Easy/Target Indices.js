var targetIndices = function (nums, target) {
  const res = [];
  nums.sort((a, b) => a - b);
  nums.map((n, idx) => {
    if (target === n) {
      res.push(idx);
    }
  });
  return res;
};
// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2
