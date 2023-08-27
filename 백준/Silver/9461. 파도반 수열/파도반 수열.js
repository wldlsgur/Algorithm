const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const testCase = Number(inputs.shift());

    for(let tc=1 ; tc<=testCase ; tc++) {
        const N = Number(inputs.shift());

        solution(N);
    }
});

function solution(N) {
    const DP = new Array(N + 1).fill(0);

    DP[1] = 1;
    DP[2] = 1;
    DP[3] = 1;

    // DP[i] = DP[i - 2] + DP[i - 3] -> 점화식
    for(let i=4 ; i<=N ; i++) {
        DP[i] = DP[i - 2] + DP[i - 3];
    }

    console.log(DP[N]);
}