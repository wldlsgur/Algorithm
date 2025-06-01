function solution(s) {
  const stack = [];

  s.split('').map((char) => {
    if (char === '(') {
      return stack.push(char);
    }

    if (char === ')' && stack[stack.length - 1] === '(') {
      return stack.pop();
    }

    if (char === ')' && stack[stack.length - 1] !== '(') {
      return stack.push(char);
    }
  });

  return stack.length === 0;
}