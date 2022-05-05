// TIME LIMIT PROBLEM
const threeSum = (nums) => {
  const numbers = {}
  const tripletsMap = {}
  const tripletsArray = [];

  for (let i = 0; i < nums.length - 1; i++) {

    if (nums[i] in numbers) {
      numbers[nums[i]].push(i);
    } else {
      numbers[nums[i]] = [i]
    }

    for (let j = i + 1; j < nums.length; j++) {
      const neededValue = 0 - nums[i] - nums[j];

      if (neededValue in numbers) {
        const arr = numbers[neededValue];

        if (arr.length > 1) {
          for (let k = 0; k < nums.length; k++) {
            if (i != j && i !== k && j !== k) {
              const triplet = [nums[i], nums[j], neededValue].sort();
              if (triplet in tripletsMap) {
                continue;
              } else {
                tripletsMap[triplet] = true;
                tripletsArray.push(triplet)
              }
            }
          }
        } else {
          const k = numbers[neededValue][0];
          if (i != j && i !== k && j !== k) {
            const triplet = [nums[i], nums[j], neededValue].sort();
            if (triplet in tripletsMap) {
              continue;
            } else {
              tripletsMap[triplet] = true;
              tripletsArray.push(triplet)
            }
          }
        }

      }
    }
  }
  return tripletsArray;
}

const nums = [13, 14, 1, 2, -11, -11, -1, 5, -1, -11, -9, -12, 5, -3, -7, -4, -12, -9, 8, -13, -8, 2, -6, 8, 11, 7, 7, -6, 8, -9, 0, 6, 13, -14, -15, 9, 12, -9, -9, -4, -4, -3, -9, -14, 9, -8, -11, 13, -10, 13, -15, -11, 0, -14, 5, -4, 0, -3, -3, -7, -4, 12, 14, -14, 5, 7, 10, -5, 13, -14, -2, -6, -9, 5, -12, 7, 4, -8, 5, 1, -10, -3, 5, 6, -9, -5, 9, 6, 0, 14, -15, 11, 11, 6, 4, -6, -10, -1, 4, -11, -8, -13, -10, -2, -1, -7, -9, 10, -7, 3, -4, -2, 8, -13]
console.log(threeSum(nums))

