// URL: https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold

// Sliding Window
const numOfSubarrays = (arr, k, threshold) => {
  let count = 0;
  let amount = 0;

  let counter = 0;

  // save first k element
  while (counter < k) {
    amount += arr[counter];
    counter++;
  }

  if (amount / k >= threshold) count++;

  for (let i = k; i < arr.length; i++) {
    amount = amount - arr[i - k] + arr[i];
    if (amount / k >= threshold) count++;
  }

  return count;
};
