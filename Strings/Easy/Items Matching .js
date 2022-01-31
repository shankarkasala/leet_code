var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  items.map((item) => {
    switch (ruleKey) {
      case "type":
        item[0] === ruleValue ? count++ : count;
        break;
      case "color":
        item[1] === ruleValue ? count++ : count;
        break;
      case "name":
        item[2] === ruleValue ? count++ : count;
        break;
      default:
        return count;
    }
  });
  return count;
};

// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
