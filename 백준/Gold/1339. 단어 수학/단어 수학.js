const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const N = Number(inputs[0]);
  const words = inputs.slice(1);

  solution(N, words);
})

function solution(N, words) {
  const alphabetNumber = {}; // 알바펫 마다 자리수 크기를 저장하는 객체

  words.forEach(word => {
    let size = 1; // 첫 단어는 길이가 1 -> 10 -> 100 ...

    //단어 맨 왼쪽 부터 검사
    for(let i=word.length - 1 ; i>=0 ; i--) {
      const alpabet = word[i]; // 첫 단어

      if(alphabetNumber[alpabet]) { // 이미 단어가 있다면 더해준다.
        alphabetNumber[alpabet] += size;
      }
      else { // 처음 나온 단어면 초기값을 넣어준다.
        alphabetNumber[alpabet] = size;
      }

      size = size * 10; // 다음 자리수 크기 설정
    }
  });

  const entriesArray = Object.entries(alphabetNumber).sort((a, b) => b[1] - a[1]); // 객체를 배열로 만들고 value 기준으로 내림차순 정렬
  let count = 9; // 큰 수부터 9를 곱하면서 내려간다.
  let result = 0;

  entriesArray.forEach(value => result += value[1] * count--);

  console.log(result);
}