// URL: https://leetcode.com/problems/number-of-good-pairs/

// Brute Force method
const numIdenticalPairs = (nums) => {
  // nums[i] == nums[j] and i < j.
  let numberOfIdentical = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) numberOfIdentical++;
    }
  }
};


// using hashmap
const numIdenticalPairs2 = (nums) => {
  // nums[i] == nums[j] and i < j.

  // Structure like : { 4: -> ids, e.g 5: [0,3] }
  const numbsMap = {}

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in numbsMap) {
      numbsMap[nums[i]].push(i);
    } else {
      numbsMap[nums[i]] = [i];
    }
  }

  let numberOfIdentical = 0;
  // const numbers = {};
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] in numbsMap) {
      if (numbsMap[nums[i]].length > 1) {
        for (let k = 0; k < numbsMap[nums[i]].length; k++) {
          if (i < numbsMap[nums[i]][k]) numberOfIdentical++;
        }
      } else {
        if (i < numbsMap[nums[i]]) numberOfIdentical++;
      }
    } else {
      numbers[nums[i]] = i;
    }
  }
  return numberOfIdentical
};


