// URL: https://leetcode.com/problems/contains-duplicate-ii

const containsNearbyDuplicate = (nums, k) => {
  // object's structure -> { element: index }
  const savedNums = {}

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in savedNums) {
      if (Math.abs(i - savedNums[nums[i]]) <= k) {
        return true;
      }
    }
    savedNums[nums[i]] = i;
  }

  return false;
};
