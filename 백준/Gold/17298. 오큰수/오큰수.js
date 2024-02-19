const inputs = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const A = Number(inputs.shift());
    const numbers = inputs.shift().split(' ').map(Number);

    process.stdout.write(solution(A, numbers));
    process.exit();
  });

function solution(A, numbers) {
  const result = Array.from({ length: A }, () => -1);
  const stack = [];

  numbers.forEach((number, index) => {
    for (let i = stack.length - 1; i >= 0; i--) {
      const max = numbers[stack[i]];

      if (max < number) {
        result[stack.pop()] = number;
      } else {
        break;
      }
    }

    stack.push(index);
  });

  return result.join(' ');
}
