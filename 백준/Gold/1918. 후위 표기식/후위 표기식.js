const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const str = inputs.shift();

    process.stdout.write(solution(str));
    process.exit();
  });

function solution(str) {
  const stack = [];
  const result = [];

  [...str].forEach(char => {
    if (char === '(') {
      return stack.push(char);
    }

    if (char === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        result.push(stack.pop());
      }
      return stack.pop();
    }

    if (char === '*' || char === '/') {
      while (
        (stack.length && stack[stack.length - 1] === '*') ||
        stack[stack.length - 1] === '/'
      ) {
        result.push(stack.pop());
      }
      return stack.push(char);
    }

    if (char === '+' || char === '-') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        result.push(stack.pop());
      }
      return stack.push(char);
    }

    result.push(char);
  });

  while (stack.length) {
    result.push(stack.pop());
  }

  return result.join('');
}
