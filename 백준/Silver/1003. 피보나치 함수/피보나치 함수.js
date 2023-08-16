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
    const dp = new Array(N + 1).fill([]);

    dp[0] = [1, 0]; // N=0 = 0 : 1개, 1 : 0개
    dp[1] = [0, 1]; // N=1 = 0 : 0개, 1 : 1개
                    // N=2 = 0 : 1개, 1 : 1개 -> 0, 1의 0과 1의 개수의 합
                    // N=3 = 0 : 1개, 1 : 2개 -> 1, 2의 0과 1의 개수의 합
    
    // 점화식 = dp[i] = dp[i-1] + dp[i-2]
    for(let i=2; i<=N ; i++) {
        const [zeroCnt1, oneCnt1] = dp[i - 1];
        const [zeroCnt2, oneCnt2] = dp[i - 2];

        dp[i] = [zeroCnt1 + zeroCnt2, oneCnt1 + oneCnt2];
    }

    console.log(...dp[N]);
}