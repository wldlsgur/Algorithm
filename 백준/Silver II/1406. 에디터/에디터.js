const inputs = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const str = inputs.shift();
    const M = parseInt(inputs.shift(), 10);
    const commands = inputs;

    process.stdout.write(solution(str, M, commands));
    process.exit();
  });

function solution(str, M, commands) {
  const leftStack = str.split('');
  const rightStack = [];

  commands.forEach(item => {
    const [method, value] = item.split(' ');

    if (method === 'P' && value) {
      leftStack.push(value);
    }

    if (method === 'L' && leftStack.length !== 0) {
      rightStack.push(leftStack.pop());
    }

    if (method === 'D' && rightStack.length !== 0) {
      leftStack.push(rightStack.pop());
    }

    if (method === 'B' && leftStack.leftStack !== 0) {
      leftStack.pop();
    }
  });

  return leftStack.join('') + rightStack.reverse().join('');
}
