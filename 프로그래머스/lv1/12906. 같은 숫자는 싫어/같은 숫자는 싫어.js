function solution(arr) {
  let answer = [];
  arr.forEach((value, index) => {
    if (value !== arr[index + 1]) {
      answer.push(value);
    }
  });
  return answer;
}