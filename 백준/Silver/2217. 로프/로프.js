const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());

}).on("close", () => {
  const N = Number(inputs[0]);
  const weights = inputs.slice(1, inputs.length).map(Number);

  solution(N, weights);
})

function solution(N, weights) {
  // 최대 무게는 사용할 로프의 개수에 따라 달라진다.
  // 사용할 로프의 개수가 정해지면 가장 많은 무게를 버틸 로프로만 가져온다
  // 로프의 개수만큼 무조건 사용해야기에 가장 적은 무게의 로프를 골라 * 사용할 로프의 개수를 해준다.
  // 그러면 반드시 로프의 개수만큼 사용하여 들 수 있는 최대의 무게가 나온다.
  // 그렇게 사용할 모든 로프의 경우를 탐색하여 그 중 최대값을 뽑는다.

  const result = [];
  weights.sort((a, b) => { return a - b; });

  weights.forEach((value, index) => {
    // (N - index)는 사용할 로프의 개수
    result.push(value * (N - index));
  });

  console.log(Math.max(...result));
}