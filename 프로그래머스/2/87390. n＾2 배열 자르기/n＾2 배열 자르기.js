function solution(n, left, right) {
  const result = [];

  for (i = left; i <= right; i += 1) {
    const number1 = Math.floor(i / n);
    const number2 = i % n;

    result.push(Math.max(number1, number2) + 1);
  }

  return result;
}