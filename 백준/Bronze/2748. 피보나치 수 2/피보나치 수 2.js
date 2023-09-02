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
    const dp = new Array(N + 1).fill(0);

    dp[0] = 0;
    dp[1] = 1;

    for(let i=2 ; i<=N ; i++) {
        dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
    }

    console.log(String(dp[N]));
}
