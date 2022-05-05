const buddyStrings = (s, goal) => {
  let problematic = 0;

  const letters = {};

  for (let i = 0; i < goal.length; i++) {
    letters[goal[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] in letters) {
      if (i !== letters[s[i]]) problematic++;
    } else {
      return false;
    }
  }
  console.log(problematic)

  if (problematic === 2 || problematic === 0) return true
  return false;
};


console.log(buddyStrings("aa", "aa"))