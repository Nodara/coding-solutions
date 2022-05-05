// URL: https://leetcode.com/problems/top-k-frequent-elements/
const topKFrequent = (nums, k) => {
  const numbsMap = {};
  const uniqueNumbers = [];

  const sorted = [];


  // count quantities of each element
  // O(n)
  for (let i = 0; i < nums.length; i++) {
    if (numbsMap[nums[i]] in nums) {
      numbsMap[nums[i]] += 1;
    } else {
      uniqueNumbers.push(nums[i])
      numbsMap[nums[i]] = 1;
    }
  }
  return numbsMap;

  // TODO: find k amount the most frequent elements
  // SORT uniqueNumbers by their quantities

};

const data = [1, 1, 1, 2, 2, 3]
console.log(topKFrequent(data, 2))