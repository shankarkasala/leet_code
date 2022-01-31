var sortSentence = function (s) {
  return s
    .split(" ")
    .sort((a, b) => a.at(-1) - b.at(-1))
    .map((word) => word.slice(0, -1))
    .join(" ");
};
// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
