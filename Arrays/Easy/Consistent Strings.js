var countConsistentStrings = function (allowed, words) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      let chr = word[j];
      if (!allowed.includes(chr)) break;
      else if (j === word.length - 1) res.push(word);
    }
  }
  return res.length;
};
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
