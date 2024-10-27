const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const [N, X] = inputs.shift().split(' ').map(Number);
    const numbers = inputs.shift().split(' ').map(Number);

    console.log(solution(N, X, numbers));
    process.exit();
  });

function solution(N, X, numbers) {
  const array = new Array(N + 1).fill(0);

  numbers.forEach(
    (number, index) => (array[index + 1] = array[index] + number)
  );

  let max = 0;
  let result = 0;

  for (let i = 0; i <= N - X; i++) {
    const sum = array[i + X] - array[i];

    if (sum > max) {
      max = sum;
      result = 1;
    } else if (sum === max) {
      result += 1;
    }
  }

  return max === 0 ? 'SAD' : `${max}\n${result}`;
}
