function solution(number, k) {
  const stack = [];

  number.split('').forEach((value) => {
    while (k > 0 && stack[stack.length - 1] < value) {
      stack.pop();
      k -= 1;
    }

    stack.push(value);
  });

  stack.splice(stack.length - k, k);
  return stack.join('');
}
