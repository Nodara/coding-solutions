// URL: https://leetcode.com/problems/rings-and-rods/

const countPoints = (rings) => {
  const ringsByPosition = {};
  let counter = 0;

  const check = (arr) => {
    let hasR, hasG, hasB;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'B') hasB = true;
      if (arr[i] === 'R') hasR = true;
      if (arr[i] === 'G') hasG = true;
    }
    return hasR && hasG && hasB;
  }

  for (let i = 0; i < rings.length - 1; i += 2) {
    if (rings[i + 1] in ringsByPosition) {
      ringsByPosition[rings[i + 1]].push(rings[i])
    } else {
      ringsByPosition[rings[i + 1]] = [rings[i]]
    }
  }

  for (let i = 0; i <= 9; i++) {
    let data = ringsByPosition[i]
    if (data && check(data)) counter++;
  }

  return counter;
};
