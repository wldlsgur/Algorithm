const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close" , () => {
    const N = Number(inputs[0]);

    solution(N);
})

function solution(N) {
    // 1을 기준으로 인덱스 숫자를 만들때 드는 연산의 개수를 저장한다.
    const DP = new Array(N + 1).fill(0);

    // 숫자 1로 2부터 N 까지 만들 수 있는 최소 연산 수
    for(let i=2 ; i<=N ; i++) {
        DP[i] = DP[i - 1] + 1; // 1부터 i까지 + 1 연산을 통해 만들 수 있는 횟수 
        
        // 2로 나누어지면 i / 2에서 * 2를 하면 만들 수 있으니까 i / 2 번째의 최소 값을 가져와 + 1 하면 현재 i의 연산 개수를 갱신할 수 있다. 
        if(i % 2 === 0) {
            DP[i] = Math.min(DP[i], DP[i / 2] + 1);
        }
        // 3으로 나누어지면 i / 3에서 * 3를 하면 만들 수 있으니까 i / 3 번째의 최소 값을 가져와 + 1 하면 현재 i의 연산 개수를 갱신할 수 있다. 
        if(i % 3 === 0) {
            DP[i] = Math.min(DP[i], DP[i / 3] + 1);
        }
    }

    console.log(DP[N]);
}