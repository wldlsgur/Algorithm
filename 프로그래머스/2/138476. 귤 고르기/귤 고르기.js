function solution(k, tangerine) {
  const arr = new Array(Math.max(...tangerine) + 1).fill(0);
  let result = 0;

  tangerine.forEach((number) => (arr[number] += 1));
  arr.sort((a, b) => b - a);

  arr.forEach((number) => {
    if (k <= 0) {
      return;
    }

    k -= number;
    result += 1;
  });

  return result;
}
