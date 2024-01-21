const inputs = [];
const startingPoint = { row: 0, col: 0 };
const dRow = [-1, 1, 0, 0];
const dCol = [0, 0, -1, 1];
require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', line => {
        inputs.push(line.trim());
    })
    .on('close', () => {
        const [n, m] = inputs.shift().split(' ').map(Number);
        const matrix = inputs.map((row, rowIndex) => {
            return row.split(' ').map((col, colIndex) => {
                const item = Number(col);

                if (item === 2) {
                    startingPoint.row = rowIndex;
                    startingPoint.col = colIndex;
                }

                return item;
            });
        });

        console.log(solution(n, m, matrix));
        process.exit();
    });

function solution(n, m, matrix) {
    const result = bfs(n, m, matrix);

    matrix.forEach(element => {});

    return result.map(value => value.join(' ')).join('\n');
}

function bfs(n, m, matrix) {
    const result = Array.from({ length: n }, () => new Array(m).fill(-1));
    const visited = Array.from({ length: n }, () => new Array(m).fill(false));
    const queue = [
        { row: startingPoint.row, col: startingPoint.col, distance: 0 },
    ];

    result[startingPoint.row][startingPoint.col] = 0;
    visited[startingPoint.row][startingPoint.col] = true;

    while (queue.length) {
        const { row, col, distance } = queue.shift();

        for (let i = 0; i < 4; i += 1) {
            const nextRow = row + dRow[i];
            const nextCol = col + dCol[i];

            if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= m) {
                continue;
            }

            if (visited[nextRow][nextCol]) {
                continue;
            }

            visited[nextRow][nextCol] = true;

            if (matrix[nextRow][nextCol] === 0) {
                result[nextRow][nextCol] = 0;
                continue;
            }

            queue.push({ row: nextRow, col: nextCol, distance: distance + 1 });
            result[nextRow][nextCol] = distance + 1;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!visited[i][j] && matrix[i][j] === 0) {
                result[i][j] = 0;
            }
        }
    }

    return result;
}
