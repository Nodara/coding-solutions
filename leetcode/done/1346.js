// URL: https://leetcode.com/problems/check-if-n-and-its-double-exist/submissions/

// using hashmap, save indices 
const checkIfExist = (arr) => {
  const numbers = {};

  for (let n = 0; n < arr.length; n++) {
    if (!(arr[n] in numbers)) {
      numbers[arr[n]] = [n]
    }

    // because it's handled in one cycle, it will rewrite one index twice, eg: [1,1,2,3,4].
    // that if solves it
    if (numbers[arr[n]][0] !== n) numbers[arr[n]].push(n);

    if (arr[n] * 2 in numbers || arr[n] / 2 in numbers) {
      // indexes will be an array with a length of more than 1 if in the array param arr[n] like value appears more than one;
      // numbers = { 2: [0,3], 3: [1]}...

      const indexes = numbers[arr[n] * 2] || numbers[arr[n] / 2]

      if (indexes.length > 1) {
        for (let i = 0; i < indexes.length; i++) {
          if (i !== n) return true;
        }
      } else {
        if (indexes[0] !== n) return true;
      }
    }
  }

  return false;
}


// brute force
const checkIfExist2 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] * 2 == arr[k] || arr[i] / 2 == arr[k]) return true;
    }
  }
  return false;
}

