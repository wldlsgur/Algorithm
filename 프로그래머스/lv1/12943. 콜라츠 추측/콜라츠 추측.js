function solution(num) {
  var answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) break;
    answer++;
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
  }
  if (answer === 500) {
    answer = -1;
  }
  return answer;
}
