// URL: https://leetcode.com/problems/first-unique-character-in-a-string/

const firstUniqueCharacterInAString = (s) => {

  const chars = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in chars) {
      chars[s[i]] = -1
    } else {
      chars[s[i]] = i;
    }
  }

  for (let i in chars) {
    if (chars[i] >= 0) return chars[i];
  }

  return -1;
}