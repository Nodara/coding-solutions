// URL:  https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = (s) => {
  let startingPoint = 0;
  let tempChars = {};
  let maxLength = 0;

  for (let i = startingPoint; i <= s.length; i++) {
    if (s[i] in tempChars) {
      let tempSubstringLength = i - startingPoint;

      // replace maxLength if temporary substring length is bigger 
      if (maxLength < tempSubstringLength) maxLength = tempSubstringLength;

      // Cleaning Up
      tempChars = {};

      i = startingPoint;

      // Change Pointer 
      startingPoint += 1;

    } else {
      tempChars[s[i]] = true;
    }
  }

  // it means that there were only one repetitive character
  if (s.length - startingPoint > maxLength) return s.length - startingPoint

  // it means that repetitive character was not found in string
  if (startingPoint === 0) return s.length;

  return maxLength;

}