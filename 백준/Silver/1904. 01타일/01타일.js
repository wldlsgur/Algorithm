const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const N = Number(inputs.shift());

    console.log(solution(N));
    process.exit();
  });

function solution(N) {
  const dp = new Array(N + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= N; i += 1) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 15746;
  }

  return dp[N];
}
