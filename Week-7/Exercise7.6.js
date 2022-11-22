const findNextGreaterElement = (arr, n) => {
  const stack = [];
  const ans = [];
  for (let i = 0; i < n; i++) ans[i] = -1;

  stack.push(0);
  for (let i = 1; i < n; i++) {
    while (stack.length != 0 && arr[stack.length - 1] < arr[i]) {
      ans[stack[stack.length - 1]] = arr[i];
      stack.pop();
    }
    stack.push(i);
  }
  return ans;
};

console.log(findNextGreaterElement([1, 2, 3, 4, 5], 5));
