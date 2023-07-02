function solution(d, budget) {
  d = d.sort((a, b) => {
    return a - b;
  });
  let money = 0;
  return d.reduce((acc, current, index) => {
    money += current;
    if (money <= budget) {
      acc ++;
    }
    return acc;
  }, 0);
}