var createTargetArray = function (nums, index) {
  let arr = [];
  for (let n of nums) {
    let idx_n = index.shift();
    arr.splice(idx_n, 0, n);
  }
  return arr;
};
// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]
