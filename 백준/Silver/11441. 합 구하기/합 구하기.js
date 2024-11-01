const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const N = Number(inputs.shift());
    const numbers = inputs.shift().split(' ').map(Number);
    const M = Number(inputs.shift());
    const locations = inputs.map((row) => row.split(' ').map(Number));

    console.log(solution(N, numbers, M, locations));
    process.exit();
  });

function solution(N, numbers, M, locations) {
  const dp = new Array(N + 1).fill(0);
  const result = [];

  numbers.forEach((number, index) => (dp[index + 1] = dp[index] + number));

  locations.forEach(([i, j]) => {
    const sum = dp[j] - dp[i - 1];

    result.push(sum);
  });

  return result.join('\n');
}
