const findSubstring = (s, words) => {
  const wordsMap = {};
  const strings = [];
  const indices = [];

  // split string s 
  for (let i = 0; i < s.length; i += 3) {
    strings.push(s.substring(i, i + 3))
  }

  // save words in map
  for (let i = 0; i < words.length; i++) {
    wordsMap[words[i]] = 1;
  }

  console.log(wordsMap)


  for (let i = 0; i < strings.length - words.length; i++) {
    let k = -1;
    let correct = true;
    while (k < words.length - 1) {
      k++;
      if (strings[i + k] in wordsMap) {
        correct = correct && true
      }
      else {
        continue;
      }
    }
    if (correct) indices.push(i);
    correct = true;
    k = -1;
  }

  return indices;
};
const s = "barfoothefoobarman", words = ["foo", "bar"];

console.log(
  findSubstring(s, words)
)

