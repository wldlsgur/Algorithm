const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const inputs = [];

rl.on("line", (input) => {
    inputs.push(input);
}).on("close", () => {
    const [N, K] = inputs[0].split(" ").map(Number);

    solution(N, K);
})

function solution(N, K) {
    const result = bfs(N, K, 0);
    console.log(result);
}

function bfs(N, K, startDay) {
    const visited = new Array(100001).fill(0);
    const queue = [];

    visited[N] = true;
    queue.push([N, startDay]);

    while(queue.length > 0){
        const [X, day] = queue.shift();

        if(X === K) return day;

        if (X - 1 >= 0 && !visited[X - 1]) {
            queue.push([X - 1, day + 1]);
            visited[X - 1] = true;
        }
        if (X + 1 <= 100000 && !visited[X + 1]) {
            queue.push([X + 1, day + 1]);
            visited[X + 1] = true;
        }
        if (X * 2 <= 100000 && !visited[X * 2]) {
            queue.push([X * 2, day + 1]);
            visited[X * 2] = true;
        }
    }
}