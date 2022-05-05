// URL: https://leetcode.com/problems/contains-duplicate

const containsDuplicate = (nums) => {
  const mem = {};

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] in mem) {
      return true;
    }
    mem[nums[i]] = true;
  }

  return false;
}