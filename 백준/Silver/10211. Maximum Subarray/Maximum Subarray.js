const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const T = Number(inputs.shift());

    for (let i = 0; i < T; i += 1) {
      const N = Number(inputs.shift());
      const numbers = inputs.shift().split(' ').map(Number);

      console.log(solution(N, numbers));
    }

    process.exit();
  });

function solution(N, numbers) {
  let maxSum = -Infinity; // 모든 수가 음수일 수 있으므로 -Infinity로 초기화
  let currentSum = 0;

  for (let i = 0; i < N; i++) {
    currentSum = Math.max(numbers[i], currentSum + numbers[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
