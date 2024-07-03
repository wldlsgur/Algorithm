function solution(numbers, target) {
  let result = 0;

  function dfs(total, index) {
    if (index === numbers.length) {
      if (target === total) {
        result += 1;
      }

      return;
    }

    dfs(total + numbers[index], index + 1);
    dfs(total - numbers[index], index + 1);
  }

  dfs(0, 0);

  return result;
}