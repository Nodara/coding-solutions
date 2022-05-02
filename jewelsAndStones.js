// URL: https://leetcode.com/problems/jewels-and-stones

const numJewelsInStones = (jewels, stones) => {
  let numOfJewels = 0;

  // stone - quantity
  const stonesMap = {};


  for (let i = 0; i < stones.length; i++) {
    if (stones[i] in stonesMap) {
      stonesMap[stones[i]]++;
    } else {
      stonesMap[stones[i]] = 1;
    }
  }

  for (let i = 0; i < jewels.length; i++) {
    if (jewels[i] in stonesMap) numOfJewels += stonesMap[jewels[i]]
  }

  return numOfJewels;
};

