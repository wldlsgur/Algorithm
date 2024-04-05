const inputs = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const n = Number(inputs.shift());
    const heights = inputs.shift().split(' ').map(Number);

    process.stdout.write(solution(n, heights));
    process.exit();
  });

function solution(n, heights) {
  const stack = [];
  const result = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1][1] < heights[i]) {
      stack.pop();
    }

    if (stack.length) {
      result[i] = stack[stack.length - 1][0] + 1;
    }

    stack.push([i, heights[i]]);
  }

  return result.join(' ');
}
