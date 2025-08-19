/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  if (nums.filter((i) => i == 0).length == 0) return 0;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      for (let j = i + 1; j <= nums.length; j++) {
        if (nums[j] != 0) {
          res += ((j - i + 1) * (j - i)) / 2;
          i = j;
          break;
        }
      }
    }
  }
  return res;
};

var zeroFilledSubarray2 = function (nums) {
  let res = 0,
    count = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == 0) {
      count += 1;
      res += count;
    } else {
      count = 0;
    }
  }
  return res;
};

console.log(zeroFilledSubarray2([0, 0, 0, 2, 0, 0]));