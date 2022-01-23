var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  while (l < r) {
    let lh = height[l];
    let rh = height[r];
    let min_h = Math.min(lh, rh);
    let len = r - l;
    let cur_area = min_h * len;
    max = Math.max(max, cur_area);
    if (lh < rh) l++;
    else r--;
  }
  return max;
};
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
