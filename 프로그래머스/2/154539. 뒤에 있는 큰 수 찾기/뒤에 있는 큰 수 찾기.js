function solution(numbers) {
  const result = Array.from({ length: numbers.length }).fill(-1);
  const stack = [];

  numbers.forEach((number, index) => {
    while (stack.length && stack[stack.length - 1].number < number) {
      const { index } = stack.pop();

      result[index] = number;
    }

    stack.push({ number, index });
  });

  return result;
}