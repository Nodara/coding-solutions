const subarraySum = (nums, k) => {
  let sum;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) {

      sum += nums[i]
      count++;
    } else {


      if (sum + nums[i] <= k) {
        sum += nums[i]
      } else {
        if (sum === k) count++;
        sum -= nums[i - 1]
      }

      if (sum == k) count++
    }
  }
  return count;
};

console.log(subarraySum(
  [1], 0))