const findPair = (arr, size, n) => {
  arr.sort((a, b) => {
    return a - b;
  });

  let i = 0;
  let j = 1;

  while (i < size && j < size) {
    if (i != j && arr[j] - arr[i] === n) {
      return 1;
    } else if (arr[j] - arr[i] < n) j++;
    else i++;
  }
  return 0;
};

console.log(findPair([5, 10, 3, 2, 50, 80], 6, 78));
