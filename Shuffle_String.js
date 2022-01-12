var restoreString = function (s, indices) {
  let arr = [];

  for (let i = 0; i < indices.length; i++) {
    arr[indices[i]] = s[i];
  }
  return arr.join("");
};
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling
