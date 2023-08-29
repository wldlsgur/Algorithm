const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const N = Number(inputs.shift());

    solution(N);
});

function solution(N) {
    const DP = new Array(N + 1).fill(0);

    DP[1] = 1;
    DP[2] = 3;

    // 1 -> 3 -> 5 -> 11
    // 점화식 = DP[i] = (DP[i-1] + DP[i-2] * 2) % 10007

    for(let i=3 ; i<=N ; i++) {
        DP[i] = (DP[i - 1] + DP[i - 2] * 2) % 10007;
    }

    console.log(DP[N]);
}
