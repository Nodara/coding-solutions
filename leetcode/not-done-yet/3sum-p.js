// Given an integer array nums,
// return all the triplets 
// [nums[i], nums[j], nums[k]] such that
//  i != j, i != k, and j != k, 
// and nums[i] + nums[j] + nums[k] == 0

const threeSum = (nums) => {
  const numbsMap = {}
  const triplets = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in numbsMap) {
      numbsMap[nums[i]].push(i);
    } else {
      numbsMap[nums[i]] = [i];
    }
  }
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const importantValue = 0 - nums[j] - nums[i];

      if (importantValue in numbers) {
        return [i, numbers[importantValue]];
      } else {
        numbers[nums[i]] = i;
      }
    }
  }





}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))