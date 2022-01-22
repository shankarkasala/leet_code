var arrayStringsAreEqual = function (word1, word2) {
  let w1 = word1.join("");
  let w2 = word2.join("");
  if (w1 == w2) {
    return true;
  } else {
    return false;
  }
};
// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
