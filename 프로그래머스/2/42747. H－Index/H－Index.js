function solution(citations) {
  citations.sort((a, b) => b - a);
  let result = 0;
  let i = 0;

  while (i + 1 <= citations[i]) {
    i += 1;
    result += 1;
  }

  return result;
}
