var maxDepth = function (s) {
  let res = [],
    count = 0;
  s.split("").map((a) => {
    if (a === "(") {
      count++;
    } else if (a === ")") {
      count--;
    }
    res.push(count);
  });
  return Math.max(...res);
};

// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.
