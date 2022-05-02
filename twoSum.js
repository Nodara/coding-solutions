// URL:  https://leetcode.com/problems/two-sum/

// BruteForce 
const twoSum1 = (nums, target) => {
  const lastIndex = nums.length;
  for (let i = 0; i <= lastIndex; i++) {
    for (let k = i + 1; k <= lastIndex; k++) {
      if (nums[i] + nums[k] === target) return [i, k];
    }
  }
}

// Using HashMap
const twoSum = (nums, target) => {
  const numbers = {};

  for (let i = 0; i <= nums.length; i++) {
    const importantValue = target - nums[i];

    if (importantValue in numbers) {
      return [i, numbers[importantValue]];
    } else {
      numbers[nums[i]] = i;
    }
  }
  return [];
}
