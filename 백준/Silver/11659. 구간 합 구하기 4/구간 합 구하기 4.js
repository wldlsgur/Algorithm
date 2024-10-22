const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const [N, M] = inputs.shift().split(' ').map(Number);
    const NCount = inputs.shift().split(' ').map(Number);
    const location = inputs.map((row) => row.split(' ').map(Number));

    process.stdout.write(solution(N, M, NCount, location));
    process.exit();
  });

function solution(N, M, NCount, location) {
  const sumArray = new Array(N + 1).fill(0);
  const result = [];

  NCount.forEach(
    (number, index) => (sumArray[index + 1] = sumArray[index] + number)
  );

  location.forEach(([i, j]) => result.push(sumArray[j] - sumArray[i - 1]));

  return result.join('\n');
}
