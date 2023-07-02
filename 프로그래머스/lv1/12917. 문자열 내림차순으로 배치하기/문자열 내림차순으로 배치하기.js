function solution(s) {
  return [...s]
    .sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
    })
    .join("");
}