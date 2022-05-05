// URL: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters

// sliding window method
const countGoodSubstrings = (s) => {
  let count = 0;

  for (let k = 3; k <= s.length; k++) {
    if (s[k - 3] !== s[k - 2] && s[k - 3] !== s[k - 1] && s[k - 2] !== s[k - 1]) count++;
  }
  return count;
};



