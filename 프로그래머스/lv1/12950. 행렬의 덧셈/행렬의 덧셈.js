function solution(arr1, arr2) {
  var answer = [];

  for (let i in arr1) {
    let temp = [];
    for (let j in arr1[i]) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }
  console.log(answer);
  return answer;
}