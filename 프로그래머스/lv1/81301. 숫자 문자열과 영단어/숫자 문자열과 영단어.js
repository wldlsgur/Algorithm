function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = "";
  let alphabet = [];

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      alphabet.push(s[i]);
      let str = alphabet.join("");

      for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] === str) {
          answer += String(j);
          alphabet = [];
          break;
        }
      }
    } else {
      answer += s[i];
    }
  }
  return Number(answer);
}