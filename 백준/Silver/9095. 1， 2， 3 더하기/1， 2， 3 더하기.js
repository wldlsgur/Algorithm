const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close" , () => {
    const T = Number(inputs.shift());

    for(let tc=0 ; tc<T ; tc++) {
        const N = Number(inputs.shift());

        solution(N);
    }
})

function solution(N) {
    const dp = new Array(N + 1).fill(0);
    
    dp[1] = 1; // 1일때 (1) 1개
    dp[2] = 2; // 2일때 (1 + 1, 2) 2개
    dp[3] = 4; // 3일때 (1 + 1 + 1, 2 + 1, 1 + 2, 3) 4개

    // 4일때 
    // 1의 (1 + 3) 1개 + 
    // 2의 (1 + 1 + 2, 2 + 2) 2개 +
    // 3의 (1 + 1 + 1 + 1, 2 + 1 + 1, 1 + 2 + 1, 3 + 1) 4개 

    for(let i=4 ; i<=N ; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    console.log(dp[N]);
}