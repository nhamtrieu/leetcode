/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  return Math.max(increase(nums), decrease(nums));
};

/**
 *
 * @param {number[]} nums
 * @return {number}
 */
const increase = (nums) => {
  // let res = 0;
  let res = [];
  res[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      res[i] = res[i - 1] + 1;
    } else {
      res[i] = 1;
    }
  }
  return Math.max(...res);
};

const decrease = (nums) => {
  let res = [];
  res[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      res[i] = res[i - 1] + 1;
    } else {
      res[i] = 1;
    }
  }
  return Math.max(...res);
};
