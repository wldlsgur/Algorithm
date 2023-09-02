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
    const dp = Array.from({length : N + 1}, () => new Array(10).fill(0));

    // N이 1, 2 일때 각 자리 수 마다 올 수 있는 경우의 수
    dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    // 
    for(let i=2 ; i<=N ; i++) { // 작은 수 부터 N까지 
        for(let j=0; j<=9 ; j++) { // j = 맨 마지막 숫자
            if(j === 0) { // 마지막 숫자 0이 올 수 있는 수는 마지막 숫자 1의 경우의 수다.
                dp[i][j] = dp[i - 1][1] % 1000000000;
            }
            else if(j === 9) { // 마지막 숫자 9가 올 수 있는 수는 마지막 숫자 8의 경우의 수다.
                dp[i][j] = dp[i - 1][8] % 1000000000;
            }
            else { // 나머지 숫자는 자기 자신보다 1작거나 1큰 숫자의 경우의 수의 합이다.
                dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
            }
        }
    }
    let result = 0;
    for(let i=0 ; i<=9 ; i++) {
        result += dp[N][i];
    }

    console.log(result % 1000000000);
}
