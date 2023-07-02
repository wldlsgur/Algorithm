let checkSosu = (i) => {
  let len = Math.sqrt(i);
  for (let j = 2; j <= len; j++) {
    if (i % j === 0) {
      return false;
    }
  }
  return true;
};

function solution(n) {
  var answer = 1;
  for (let i = 3; i <= n; i++) {
    if (checkSosu(i)) {
      answer++;
    }
  }
  return answer;
}