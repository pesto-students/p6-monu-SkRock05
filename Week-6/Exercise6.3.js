const swap = (arr, ind1, ind2) => {
  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
};

const sort = (arr, arr_size) => {
  let low = 0,
    high = arr_size - 1,
    mid = 0;

  while (mid <= high) {
    if (arr[mid] == 0) {
      swap(arr, low, mid);
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      swap(arr, mid, high);
      high--;
    }
  }

  return arr;
};

console.log(sort([0, 2, 1, 2, 0], 5));
