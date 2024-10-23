const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const [N, M] = inputs.shift().split(' ').map(Number);
    const numbers = inputs[0].split(' ').map(Number);

    console.log(solution(N, M, numbers));
    process.exit();
  });

function solution(N, M, numbers) {
  const array = new Array(N + 1).fill(0);

  numbers.forEach((number, index) => {
    array[index + 1] = array[index] + number;
  });

  let result = 0;
  let left = 1;
  let right = 1;

  while (right <= N) {
    let sum = array[right] - array[left - 1];
    if (sum === M) {
      result += 1;
    }

    while (sum > M) {
      left += 1;
      sum = array[right] - array[left - 1];

      if (sum === M) {
        result += 1;
      }
    }

    right += 1;
  }

  return result;
}
