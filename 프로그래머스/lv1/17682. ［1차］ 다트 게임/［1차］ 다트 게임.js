function solution(dartResult) {
  var answer = 0;
  let jaeghop = {
    S: 1,
    D: 2,
    T: 3,
  };
  let before = -9999999;

  for (let i = 0; i < dartResult.length; i += 2) {
    let jumsu = 0;
    if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
      i++;
      jumsu = 10 ** jaeghop[dartResult[i + 1]];
    } else {
      jumsu = Number(dartResult[i]) ** jaeghop[dartResult[i + 1]];
    }
    if (dartResult[i + 2] === "*" || dartResult[i + 2] === "#") {
      if (dartResult[i + 2] === "#") {
        jumsu = jumsu * -1;
      } else if (dartResult[i + 2] === "*") {
        if (before === -9999999) {
          jumsu = jumsu * 2;
        } else {
          answer = answer - before;
          answer += before * 2;
          jumsu = jumsu * 2;
        }
      }
      i++;
    }
    before = jumsu;
    answer += jumsu;
  }
  console.log(answer);
  return answer;
}