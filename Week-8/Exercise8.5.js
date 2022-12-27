let findJudge = function (N, trust) {
  const map = new Map();
  for (let nums = 1; nums <= N; nums++) {
    map.set(nums, 1);
  }

  for (let t = 0; t < trust.length; t++) {
    map.set(trust[t][0], map.get(trust[t][0]) - 1);
    map.set(trust[t][1], map.get(trust[t][1]) + 1);
  }

  for (const [k, v] of map.entries()) {
    if (v == N) return k;
  }
  return -1;
};
