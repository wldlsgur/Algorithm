function solution(a, b) {
  let start = Math.min(a, b);
  let end = Math.max(a, b);
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return a === b ? a : sum;
}