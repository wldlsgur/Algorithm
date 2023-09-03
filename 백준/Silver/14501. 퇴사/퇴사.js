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
    dfs(info, N, 0, 0);

    console.log(max);
}

function dfs(info, N, index, sum) {
    if(index >= N) {
        return max = Math.max(max, sum);
    }

    const [T, P] = info[index];

    if(index + T <= N) {
        dfs(info, N, index + T, sum + P);
    }
    dfs(info, N, index + 1, sum);
}