var interpret = function (command) {
  // return command.replace(/\(al\)/g,"al").replace(/\(\)/g,"o");
  return command.split("()").join("o").split("(al)").join("al");
};

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".
