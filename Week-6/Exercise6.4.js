let maxProfit = (prices) => {
  let buy = Number.MAX_SAFE_INTEGER,
    sell = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    sell = Math.max(sell, prices[i] - buy);
  }
  return sell;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
