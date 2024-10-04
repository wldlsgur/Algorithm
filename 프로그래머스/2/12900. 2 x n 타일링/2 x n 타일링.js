
function solution(n) {
  const dp = new Array(n + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i += 1) {
    const sum = (dp[i - 1] + dp[i - 2]) % 1000000007;

    dp[i] = sum;
  }

  return dp[n];
}