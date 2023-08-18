const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close" , () => {
    const T = Number(inputs.shift());

    for(let tc=1 ; tc<=T ; tc++) {
        const K = Number(inputs.shift());
        const N = Number(inputs.shift());

        solution(K, N);
    }
})

function solution(K, N) {
    const DP = Array.from({ length : K + 1}, () => new Array(N + 1).fill(0));

    // 0층 사람 수 초기화
    for(let i=1; i<=N ; i++) {
        DP[0][i] = i;
    }

    for(let floor=1 ; floor<=K ; floor++) { // 1층 부터 K층까지
        for(let room=1 ; room<=N ; room++) { // 1호부터 N호 까지
            let totalPeople = 0;

            for(let p=1 ; p<=room ; p++) { // 전 층의 1호부터 현재 호까지
                totalPeople += DP[floor - 1][p];
            }

            DP[floor][room] = totalPeople;
        }
    }

    console.log(DP[K][N]);
}
