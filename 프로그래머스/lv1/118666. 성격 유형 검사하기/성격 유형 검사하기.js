function solution(survey, choices) {
  let answer = "";
  let map = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i in choices) {
    let [leftType, rightType] = survey[i].split("");

    if (choices[i] === 4) continue;

    let point = 0;
    switch (choices[i]) {
      case 1:
      case 7:
        point = 3;
        break;
      case 2:
      case 6:
        point = 2;
        break;
      case 3:
      case 5:
        point = 1;
        break;
    }
    choices[i] < 4 ? (map[leftType] += point) : (map[rightType] += point);
  }
  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i += 2) {
    let leftType = map[keys[i]];
    let rightType = map[keys[i + 1]];
    if (leftType >= rightType) {
      answer += String(keys[i]);
    } else if (leftType < rightType) {
      answer += String(keys[i + 1]);
    }
  }
  return answer;
}