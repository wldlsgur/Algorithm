const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const upDown = [-1, 1, 0, 0];
const leftRight = [0, 0, -1, 1];
const inputs = [];

rl.on('line', (input) => {
    inputs.push(input.trim());
}).on('close', () => {
    const testCase = Number(inputs[0]);
    let inputIdx = 1;

    for (let i=0 ; i < testCase ; i++) {
        const [M, N, K] = inputs[inputIdx].split(' ').map(Number);
        const array = inputs.slice(inputIdx + 1, inputIdx + 1 + K);
        inputIdx += K + 1;
        solution(M, N, K, array);
    }
});

function solution(M, N, K, array) {
    const matrix = createMatrix(N, M);
    const visited = createMatrix(N, M);
    let result = 0;

    for (let i=0 ; i < K ; i++) {
        const [x, y] = array[i].split(' ').map(value => Number(value));
        addVertex(matrix, x, y);
    }

    for (let i=0 ; i < N ; i++) {
        for (let j=0 ; j < M ; j++) {
            if (matrix[i][j] === 1 && !visited[i][j]) {
                bfs(matrix, visited, i, j, M, N);
                result++;
            }
        }
    }
    console.log(result);
}

function bfs(matrix, visited, col, row, M, N) {
    let queue = [];

    queue.push([col, row]);
    visited[col][row] = 1;

    while (queue.length > 0) {
        const [qCol, qRow] = queue.shift();

        for (let i=0 ; i < 4 ; i++) {
            const newCol = qCol + upDown[i];
            const newRow = qRow + leftRight[i];

            if (newCol < 0 || newCol >= N || newRow < 0 || newRow >= M) continue;

            if (!visited[newCol][newRow] && matrix[newCol][newRow] === 1) {
                queue.push([newCol, newRow]);
                visited[newCol][newRow] = 1;
            }
        }
    }
}

function addVertex(matrix, x, y) {
    matrix[y][x] = 1;
}

function createMatrix(N, M) {
    let matrix = new Array(N);

    for (let i=0 ; i < N ; i++) {
        matrix[i] = new Array(M).fill(0);
    }

    return matrix;
}