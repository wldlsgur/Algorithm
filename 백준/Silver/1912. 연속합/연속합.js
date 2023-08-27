const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const N = Number(inputs.shift());
    const info = inputs[0].split(" ").map(Number);

    solution(N, info);
});

function solution(N, info) {
    for(let i=1 ; i<=N ; i++) {
        // 이전 값에서 연속해 합하면 더 커지는 경우
        // 더 작다면 현재 부터 다시 합을 구하기 시작
        if(info[i - 1] + info[i] > info[i]) {
            info[i] = info[i - 1] + info[i];
        }
    }
    console.log(Math.max(...info));
}