const merge = (a, m, b, n) => {
  const arr = [];
  let k = 0;

  let arr1 = [], arr2 = [];

  if (a.length - n >= b.length) {
    arr1 = b;
    for (let i = 0; i < m; i++) arr2[i] = a[i]
  } else {
    for (let i = 0; i < m; i++) arr1[i] = a[i]
    arr2 = b;
  }

  console.log(arr1, arr2)



  for (let i = 0; i < arr2.length; i++) {
    if (i >= arr1.length) {
      if (k < arr2.length) arr.push(arr2[k])
    } else {
      while (arr1[i] > arr2[k]) {
        arr.push(arr2[k]);
        k++;
      }
      if (arr1[i] == arr2[k]) {
        arr.push(arr1[i])
        arr.push(arr2[k])
        k++;
      } else arr.push(arr1[i])
    }
  }
  return arr;
}

console.log(merge([1, 2, 3, 0, 0, 0],
  3,
  [2, 5, 6],
  3))