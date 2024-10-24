const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const t = Number(inputs.shift());
    const numbers = inputs.map(Number);

    console.log(solution(t, numbers));
    process.exit();
  });

function solution(t, numbers) {
  const result = [];

  numbers.forEach((number) => {
    const dp = new Array(number + 1).fill(0);

    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let i = 4; i <= number; i += 1) {
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    result.push(dp[number]);
  });

  return result.join('\n');
}
