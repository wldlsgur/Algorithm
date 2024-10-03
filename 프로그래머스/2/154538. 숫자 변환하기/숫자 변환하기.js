function solution(x, y, n) {
  const dp = new Array(y + 1).fill(Infinity);
  const length = dp.length;

  dp[x] = 0;

  for (let i = x; i < y; i += 1) {
    if (i + n <= length) {
      dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    }

    if (i * 2 <= length) {
      dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    }

    if (i * 3 <= length) {
      dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    }
  }

  return dp[y] === Infinity ? -1 : dp[y];
}