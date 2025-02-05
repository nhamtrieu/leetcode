/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let countDiff = 0;
  if (s1.length != s2.length) return false;
  const text1 = [],
    text2 = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) {
      countDiff++;
      if (countDiff > 2) return false;
      text1.push(s1[i]);
      text2.push(s2[i]);
    }
  }
  if (countDiff == 0) return true;
  if (countDiff == 2) {
    text1.sort();
    text2.sort();
    return text1.join("") == text2.join("");
  }
  return false;
};
