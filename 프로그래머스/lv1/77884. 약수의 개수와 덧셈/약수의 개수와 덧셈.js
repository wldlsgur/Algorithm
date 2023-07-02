function solution(left, right) {
  var answer = 0;
  let object = {};
  for (let i = left; i <= right; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        cnt++;
      }
    }
    object[i] = cnt;
  }
  for (let i in object) {
    (object[i] % 2 === 0) ? answer += Number(i) : answer -= Number(i)
  }
  return answer;
}