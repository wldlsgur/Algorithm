const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const dy = [-1, 1, 0, 0, -1, -1, 1, 1];
const dx = [0, 0, -1, 1, -1, 1, -1, 1];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    while(true) {
        const [W, H] = inputs.shift().split(" ").map(Number);

        if(W === 0 && H === 0) {
            break;
        }

        const M = inputs.splice(0, H).map(value => value.split(" ").map(Number));

        solution(W, H, M);
    }
})

function solution(W, H, M) {
    const visited = Array.from({length : H}, () => new Array(W).fill(false));
    let result = 0;

    for(let i=0; i<H ; i++) {
        for(let j=0 ; j<W ; j++) {
            if(!visited[i][j] && M[i][j]) {
                result += 1;
                bfs(M, W, H, visited, i, j);
            }
        }
    }

    console.log(result);
}

function bfs(M, W, H, visited, startY, startX) {
    const queue = [[startY, startX]];

    visited[startY][startX] = true;

    while(queue.length > 0) {
        const [y, x] = queue.shift();

        for(let i=0 ; i<8 ; i++) {
            const [newY, newX] = [y + dy[i], x + dx[i]];

            // 범위 벗어나면 생략
            if(newY < 0 || newY >= H || newX < 0 || newX >= W) {
                continue;
            }

            if(M[newY][newX] && !visited[newY][newX]) {
                visited[newY][newX] = true;
                queue.push([newY, newX]);
            }
        }
    }
}