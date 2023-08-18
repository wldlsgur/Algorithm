const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close" , () => {
    const N = Number(inputs.shift());
    const info = inputs.splice(0, inputs.length).map(value => value.split(" ").map(Number));

    solution(N, info);
})

function solution(N, info) {
    // 집마다 3가지 색 모두 색칠할 수 있는 최소 비용을 저장한다.
    const DP = Array.from({ length : N }, () => new Array(3).fill(0));

    // 맨 첫 집은 3가지 색 모두 기본 값이다.
    DP[0][0] = info[0][0];
    DP[0][1] = info[0][1];
    DP[0][2] = info[0][2];

    // 2번 집부터 빨간색을 칠하는 경우 이전 집 초록, 파랑의 최소 비용과 현재 빨간색의 비용을 더해준다.
    for(let i=1; i<N ; i++) {
        DP[i][0] = Math.min(DP[i - 1][1], DP[i - 1][2]) + info[i][0];
        DP[i][1] = Math.min(DP[i - 1][0], DP[i - 1][2]) + info[i][1];
        DP[i][2] = Math.min(DP[i - 1][0], DP[i - 1][1]) + info[i][2];
    }

    console.log(Math.min(...DP[N - 1]));
}