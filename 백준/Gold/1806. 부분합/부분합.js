const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const [N, S] = inputs.shift().split(' ').map(Number);
    const numbers = inputs[0].split(' ').map(Number);

    console.log(solution(N, S, numbers));
    process.exit();
  });

function solution(N, S, numbers) {
  let sum = 0;
  let minLength = Infinity;
  let i = 0;
  let j = 0;

  while (j < N) {
    sum += numbers[j];

    while (sum >= S) {
      sum -= numbers[i];
      minLength = Math.min(minLength, j - i + 1);
      i++;
    }

    j++;
  }

  return minLength === Infinity ? 0 : minLength;
}
