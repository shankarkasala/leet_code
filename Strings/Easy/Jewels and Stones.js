var numJewelsInStones = function (jewels, stones) {
  const j = new Set(jewels);
  return stones.split("").reduce((res, s) => res + j.has(s), 0);
};
// Input: (jewels = "aA"), (stones = "aAAbbbb");
// Output: 3;
