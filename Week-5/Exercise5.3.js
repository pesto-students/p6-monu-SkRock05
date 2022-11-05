function hasDuplicate(array) {
  if (array.length == 0) return false;

  const arraySet = new Set();

  for (let arr of array) {
    if (arraySet.has(arr)) return true;
    arraySet.add(arr);
  }

  return false;
}

console.log(hasDuplicate([1, 1, 1, 1]));
