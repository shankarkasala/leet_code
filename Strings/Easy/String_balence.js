/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      total++;
    }
  }
  return total;
};

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
