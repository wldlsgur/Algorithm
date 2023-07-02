function solution(n) {
  let result = 0;
  while (n > 0) {
    result += Math.trunc(n % 10);
    n = Math.trunc(n / 10);
  }
  return result;
}