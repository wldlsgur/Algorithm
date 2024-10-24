const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const numbers = inputs.map(Number);

    console.log(solution(numbers));
    process.exit();
  });

function solution(numbers) {
  const length = numbers.length;
  const result = [];
  const target = 100;
  let min = 0;
  let sum = 0;

  for (let i = 0; i < length; i += 1) {
    sum += numbers[i];
    result.push(sum);
  }

  result.forEach((number) => {
    const m1 = Math.abs(target - min);
    const m2 = Math.abs(target - number);

    if (m1 === m2) {
      return (min = Math.max(min, number));
    }

    min = m1 > m2 ? number : min;
  });

  return min;
}
