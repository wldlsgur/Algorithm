const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const [N, K] = inputs.shift().split(' ').map(Number);
    const numbers = inputs[0].split(' ').map(Number);

    console.log(solution(N, K, numbers));
    process.exit();
  });

function solution(N, K, numbers) {
  const array = new Array(N + 1).fill(0);

  numbers.forEach(
    (number, index) => (array[index + 1] = array[index] + number)
  );

  const result = [];
  let left = 1;
  let right = K;

  while (right <= N) {
    const sum = array[right] - array[left - 1];

    result.push(sum);
    left += 1;
    right += 1;
  }

  return Math.max(...result);
}
