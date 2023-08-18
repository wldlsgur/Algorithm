const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close" , () => {
    const N = Number(inputs.shift());

    solution(N);
})

function solution(N) {
    const DP = new Array(N + 1).fill(0);

    DP[1] = 1;
    DP[2] = 2;

    for(let i=3 ; i<=N ; i++) {
        DP[i] = (DP[i-1] + DP[i-2])  % 10007;
    }

    console.log(DP[N]);
}
// 10007로 나누지 않고 마지막에 arr에 넣은 값을 10007로 나눠서 출력하면 값이 너무 커져서 컴퓨터 내부에서 정상적인 계산이 이루어지지 않기 때문이다.
