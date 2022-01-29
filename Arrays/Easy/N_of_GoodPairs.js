var numIdenticalPairs = function (nums) {
  nums.sort();
  let count = 0;
  let i = 0;
  for (let j = 1; j <= nums.length; j++) {
    if (nums[j] == nums[i]) {
      count = count + j - i;
    } else {
      i = j;
    }
  }
  return count;
};
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
