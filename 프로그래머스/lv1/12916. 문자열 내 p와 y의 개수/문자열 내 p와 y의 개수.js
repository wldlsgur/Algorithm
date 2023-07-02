function solution(s) {
  var answer = true;
  let obj = {
    p: 0,
    y: 0,
  };
  let arr = [...s];
  arr.forEach((value, index) => {
    if (value === "p" || value === "P") {
      obj.p++;
    }
    if (value === "y" || value === "Y") {
      obj.y++;
    }
  });
  if (obj.p === 0 && obj.y === 0) answer = true;
  answer = obj.p === obj.y ? true : false;
  return answer;
}