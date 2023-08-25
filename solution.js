const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const N = Number(inputs.shift());
  const info = inputs.map((value) => value.split(" ").map(Number));

  solution(N, info);
});

function solution(N, info) {
  /*
  7
  3 8
  8 1 0
  2 7 4 4
  4 5 2 6 5 
  */
  // N - 2 배열 부터 위로 0까지 탐색한다.
  // 아래 배열의 j와 j+1 인덱스를 더한 두 개의 값을 비교하여 더 큰 값을 갱신
  for (let i = N - 2; i >= 0; i--) {
    for (let j = 0; j < info[i].length; j++) {
      info[i][j] = Math.max(
        info[i + 1][j] + info[i][j],
        info[i + 1][j + 1] + info[i][j]
      );
    }
  }
  console.log(info);
  console.log(info[0][0]);
}
