const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
let result = -1;

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const [A, B] = inputs[0].split(" ").map(Number);

  solution(A, B);
});

function solution(A, B) {
  dfs(A, B, 1)

  console.log(result);
}

function dfs(start, end, count) {
  if(start === end) { // 두 수가 같을 경우
    if(result === -1 || count < result) { // -1인 경우 아직 같은 경우가 없고 최소 값을 구하여야 하니 result를 비교해준다.
      result = count;
    }
    return;
  }

  if(start * 2 <= end) dfs(start * 2, end, count + 1);
  if(start * 2 + 1 <= end) dfs(start * 10 + 1, end, count + 1);
}