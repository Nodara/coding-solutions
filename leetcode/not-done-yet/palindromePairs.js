// URL: https://leetcode.com/problems/palindrome-pairs/submissions/

const checkPalindrome = (a, b) => {
  const concatString = a.concat(b);

  const lengthOfConcatString = concatString.length;
  for (let i = 0; i < lengthOfConcatString / 2; i++) {
    if (concatString.charAt(i) !== concatString.charAt(lengthOfConcatString - 1 - i)) {
      return false;
    }
  }
  return true;
}


const palindromePairs = (words) => {
  const wordsMap = {};

  // to save the first characters of the strings
  const starterLetters = {};

  const indexes = {}

  const indexesArray = [];


  for (let i = 0; i < words.length; i++) {
    wordsMap[words[i]] = i;
    // group words by first letter
    if (!starterLetters[words[i][0]]) {
      starterLetters[words[i][0]] = [];
    }
    starterLetters[words[i][0]].push(words[i])
  }

  for (let i = 0; i < words.length; i++) {
    // words[i][words.i.length - 1] last letter of the text if found in starterLetters
    if (words[i][words[i].length - 1] in starterLetters) {
      const wordStartByLetter = starterLetters[words[i][words[i].length - 1]]
      for (let k = 0; k < wordStartByLetter.length; k++) {
        if (words[i] !== wordStartByLetter[k]) {
          if (checkPalindrome(words[i], wordStartByLetter[k])) indexes[[i, wordsMap[wordStartByLetter[k]]]] = 1;
          if (checkPalindrome(wordStartByLetter[k], words[i])) indexes[[wordsMap[wordStartByLetter[k]], i]] = 1;
        }
      }
    }

    if (words[i] === '') {
      for (let k = 0; k < words.length; k++) {
        if (k !== i) {
          if (checkPalindrome(words[i], words[k])) indexes[[i, k]] = 1;
          if (checkPalindrome(words[k], words[i])) indexes[[k, i]] = 1;
        }
      }
    }
  }

  for (let index in indexes) indexesArray.push([Number(index.split(',')[0]), Number(index.split(',')[1])]);
  return indexesArray;
}

const word = ["a", "abc", "aba", ""]
console.log(palindromePairs(word))