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

    // dp[N][1]는 0으로 끝나는 경우 = 0 와 1로 끝나는 경우 = 1
    const dp = [[0, 0], [0 , 1]];

    // 1뒤에는 무조건 0이 오게되고
    // 0뒤에서는 1 또는 0이 올 수 있다.
    for(let i=2 ; i<=N ; i++) { // 최소 부터 N까지
        dp[i] = [BigInt(dp[i - 1][0]) + BigInt(dp[i - 1][1]), BigInt(dp[i - 1][0])];
    }

    console.log(String(dp[N][0] + dp[N][1]));
}