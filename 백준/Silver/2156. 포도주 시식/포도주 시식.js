const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const N = Number(inputs.shift());
  const info = inputs.map(Number);

  solution(N, info);
});

function solution(N, info) {
  const DP = new Array(N).fill(0);

  info.unshift(0);

  DP[1] = info[1]; // 1번째 와인 마신 경우
  DP[2] = info[1] + info[2]; // 1, 2 와인 마신 경우
  DP[3] = Math.max(DP[2], DP[1] + info[3], info[2] + info[3]) // 3번쨰 안마시거나, 1, 3 마시거나 2, 3 마시거나 셋 중 가장 큰 값

  // 4번째 와인부터는 3가지 경우가 있다.
  for(let i=4 ; i<=N ; i++) {
    const first = DP[i - 1] // 4번쨰 와인을 안 마신 경우
    const second = DP[i - 2] + info[i]; // 3번째는 안 마시고 1, 2, 4째 와인을 마신 경우
    const third = DP[i - 3] + info[i] + info[i - 1]; // 2번째는 안 마시고 1, 3, 4째 와인을 마신 경우

    DP[i] = Math.max(first, second, third);
  }

  console.log(DP[N]);
}
