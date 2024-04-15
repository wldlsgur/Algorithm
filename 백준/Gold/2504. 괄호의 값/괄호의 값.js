const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const str = inputs.shift();

    console.log(solution(str));
    process.exit();
  });

function solution(str) {
  const stack = [];

  for (const char of [...str]) {
    if (char === '(' || char === '[') {
      stack.push(char);
    } else {
      const reverse = char === ')' ? '(' : '[';
      const point = reverse === '(' ? 2 : 3;

      if (stack.length === 0) { // 스택이 비어있는 경우 처리
        return 0;
      }

      if (typeof stack[stack.length - 1] === 'number') {
        let value = 0;
        while (stack.length > 0 && typeof stack[stack.length - 1] === 'number') {
          value += stack.pop();
        }
        if (stack.length === 0 || stack.pop() !== reverse) { // 적절한 여는 괄호가 없는 경우 처리
          return 0;
        }
        stack.push(value * point);
      } else {
        if (stack.pop() !== reverse) { // 적절한 여는 괄호가 없는 경우 처리
          return 0;
        }
        stack.push(point);
      }
    }
  }

  // 스택에 숫자만 남아있는지 확인하고, 그렇지 않다면 0 반환
  if (stack.some(item => typeof item !== 'number')) {
    return 0;
  }

  // 모든 검사를 통과했다면, 스택에 남은 숫자 합계 반환
  return stack.reduce((acc, cur) => acc + cur, 0);
}