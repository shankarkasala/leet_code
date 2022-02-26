var truncateSentence = function (s, k) {
  let a = s.split(" ");
  let res = "";
  for (let i = 0; i <= k - 1; i++) {
    res += a[i] + " ";
  }
  return res.trim();
};

// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".
