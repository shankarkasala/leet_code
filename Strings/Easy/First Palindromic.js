var firstPalindrome = function (words) {
  for (let word of words) {
    if (word === word.split("").reverse().join("")) {
      return word;
    }
  }
  return "";
};

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
