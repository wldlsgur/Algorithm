const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

let visited = [];
const inputs = [];
const nones = []; // 빈 공간 좌표 모음
const virus = []; // 바이러스 좌표 모음
const result = [];
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0 , 0];

// 바이러스 : 2, 벽 : 1, 빈 공간 : 0
rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const [N, M] = inputs[0].split(" ").map(Number);
    const matrix = inputs.slice(1, inputs.length).map((value, yIndex) => {
        return value.split(" ").map((value, xIndex) => {
            const number = Number(value);

            if(number === 2) virus.push({ x : xIndex, y : yIndex });
            if(number === 0) nones.push({ x : xIndex, y : yIndex });

            return number;
        });
    });
    solution(N, M , matrix);
});

function solution(N, M, matrix) {

    for(let i=0 ; i<nones.length ; i++) {
        for(let j=i+1 ; j<nones.length ; j++) {
            for(let z=j+1 ; z<nones.length ; z++) {
                const { x: x1, y: y1 } = nones[i];
                const { x: x2, y: y2 } = nones[j];
                const { x: x3, y: y3 } = nones[z];
                let count = 0;
                visited = Array.from({ length: N }, () => Array(M).fill(false));

                matrix[y1][x1] = 1;
                matrix[y2][x2] = 1;
                matrix[y3][x3] = 1;

                for(let k=0 ; k<virus.length ; k++) {
                    const { x : vX, y : vY } = virus[k];

                    count += bfs(matrix, vX, vY, N, M);
                }

                matrix[y1][x1] = 0;
                matrix[y2][x2] = 0;
                matrix[y3][x3] = 0;

                result.push(nones.length - 3 - count);
            }
        }
    }
    console.log(Math.max(...result));
}

function bfs(matrix, x, y, N, M) {
    const queue = [];
    let count = 0;

    queue.push({ x, y });
    visited[y][x] = 2;

    while(queue.length > 0) {
        const { x, y } = queue.shift();

        for(let i=0 ; i<4 ; i++){
            const newX = x + dx[i];
            const newY = y + dy[i];

            if(newX < 0 || newY < 0 || newX >= M || newY >= N) continue;

            if (visited[newY][newX] === false && matrix[newY][newX] === 0) {
                count++;
                visited[newY][newX] = true;
                queue.push({ x : newX, y : newY });
            }
        }
    }
    return count;
}