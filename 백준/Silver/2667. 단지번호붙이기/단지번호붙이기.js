const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

rl.on('line', (input) => {
    inputs.push(input.trim());
}).on('close', () => {
    const N = Number(inputs.shift());
    const M = inputs.map((value) => value.split('').map(Number));

    solution(N, M);
});

function solution(N, M) {
    const visited = Array.from({ length: N }, () => new Array(N).fill(false));
    const result = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M[i].length; j++) {
            const start = M[i][j];

            if (start === 1 && !visited[i][j]) {
                result.push(bfs(i, j, visited, N, M));
            }
        }
    }

    console.log(result.length);
    result.sort((a, b) => a - b).map((value) => console.log(value));
}

function bfs(x, y, visited, N, M) {
    const queue = [[x, y]];
    let count = 0;

    visited[x][y] = true;
    count++;

    while (queue[0]) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const newX = x + dx[i];
            const newY = y + dy[i];

            if (newX >= N || newX < 0 || newY >= N || newY < 0) {
                continue;
            }

            if (!visited[newX][newY] && M[newX][newY] === 1) {
                queue.push([newX, newY]);
                visited[newX][newY] = true;
                count++;
            }
        }
    }

    return count;
}
