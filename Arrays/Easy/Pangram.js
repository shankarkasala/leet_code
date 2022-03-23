var checkIfPangram = function (sentence) {
  const arr = sentence.split("");

  let sol = arr.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});
  let count = 0;
  for (let key in sol) {
    count++;
  }
  if (count === 26) return true;
  return false;
};

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
