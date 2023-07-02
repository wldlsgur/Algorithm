function solution(s, n) {
  var answer = "";

  for (let i = 0; i < s.length; i++) {
    let ascll = s.charCodeAt(i);
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    if (ascll >= 65 && ascll <= 90 && ascll + n > 90) {
      ascll = ascll + n - 26;
    } else if (ascll >= 97 && ascll <= 122 && ascll + n > 122) {
      ascll = ascll + n - 26;
    } else {
      ascll = ascll + n;
    }
    answer += String.fromCharCode(ascll);
  }
  console.log(answer);
  return answer;
}