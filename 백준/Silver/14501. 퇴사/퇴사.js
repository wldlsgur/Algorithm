const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
let max = 0;

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const N = Number(inputs.shift());
    const info = inputs.map(value => value.split(" ").map(Number));

    solution(N, info);
});

function solution(N, info) {
    const dp = new Array(N + 1).fill(0);

    for(let i=N - 1 ; i>=0 ; i--) {
        const [T, P] = info[i];

        if(i + T <= N) {
            dp[i] = Math.max(P + dp[i + T], dp[i + 1]); // 참석한 경우 or 참석 안하는 경우 중 max
        }
        else {
            dp[i] = dp[i + 1]; // 참석 못하는 범위면 안하는 경우 max
        }
    }

    console.log(dp[0]);

    /*dfs(info, N, 0, 0);

    console.log(max);*/
}


// 완전 탐색 방법
function dfs(info, N, index, sum) {
    if(index >= N) {
        return max = Math.max(max, sum);
    }

    const [T, P] = info[index];

    // 상담 하는 경우
    if(index + T <= N) {
        dfs(info, N, index + T, sum + P);
    }
    // 상담하지 않는 경우
    dfs(info, N, index + 1, sum);
}