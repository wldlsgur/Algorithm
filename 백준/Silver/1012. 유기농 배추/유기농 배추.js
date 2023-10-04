const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const testCase = Number(inputs.shift());

    for(let i=0 ; i<testCase ; i++) {
        const [M, N, K] = inputs.shift().split(" ").map(Number);
        const G = inputs.splice(0, K).map(value => value.split(" ").map(Number));

        solution(M, N, K, G);
    }
})

function solution(M, N, K, G) {
    const matrix = Array.from({length : N}, () => new Array(M).fill(0));
    const visited = Array.from({length : N} ,() => new Array(M).fill(false));
    let result = 0;

    // 배추 심기
    for(const [x, y] of G) {
        matrix[y][x] = 1;
    }

    for(let i=0 ; i<N ; i++) {
        for(let j=0 ; j<M ; j++) {
            if(!visited[i][j] && matrix[i][j]) {
                result += 1;
                bfs(M, N, matrix, visited, i, j);
            }
        }
    }

    console.log(result);
}

function bfs(M, N, matrix, visited, startY, startX) {
    const queue = [[startY, startX]];

    visited[startY][startX] = true;

    while(queue.length > 0) {
        const [y, x] = queue.shift();

        // 상 하 좌 우 탐색
        for(let i=0 ; i<4 ; i++) {
            const [newY, newX] = [y + dy[i], x + dx[i]];

            // 배열 범위 검사
            if(newY < 0 || newY >= N || newX < 0 || newX >= M) {
                continue;
            }

            if(matrix[newY][newX] && !visited[newY][newX]) {
                visited[newY][newX] = true;
                queue.push([newY, newX]);
            }
        }
    }
}