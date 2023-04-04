let obj = {
  n: 10,
  [Symbol.iterator]: function () {
    let i = 0,
      old = 0,
      next = 0;
    return {
      next: () => {
        if (i < this.n) {
          i++;
          [old, next] = [next, old + next || 1];
          return {
            value: old,
            done: false,
          };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let i of obj) {
  console.log(i);
}
