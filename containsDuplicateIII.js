// URL:  https://leetcode.com/problems/contains-duplicate-iii/

// BruteForce 
const containsNearbyAlmostDuplicate = (nums, k, t) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
}

console.log(
  containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)
)
