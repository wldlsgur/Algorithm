const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const testCase = Number(inputs.splice(0, 1));

  for(let i=0 ; i<testCase ; i++) {
    const N = inputs.splice(0, 1).map(Number);
    const ranks = inputs.splice(0, N).map(value => value.split(" ").map(Number));

    solution(N, ranks);
  }
});

function solution(N, ranks) {
  ranks.sort((a, b) => a[0] - b[0]); // 성적 등수 기준으로 정렬

  let standard = ranks[0][1]; // 성적 1등은 무조건 합격이기에 1등의 면접 등수를 기준
  let result = 0;

  ranks.forEach(rank => {
    if(rank[1] <= standard) { // 만약 현재 기준의 면접 등수보다 높은 등수라면 신입사원 확정
      result++;
      standard = rank[1]; // 마지막 합격한 신입사원의 면접 등수를 기준으로 최신화
    }
  });

  console.log(result);
}