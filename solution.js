const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const location = { water: [], hedgehog: [] };

rl.on('line', (input) => {
    inputs.push(input.trim());
}).on('close', () => {
    const [R, C] = inputs.shift().split(' ').map(Number);
    const M = inputs.map((row, rowIndex) =>
        row.split('').map((column, columnIndex) => {
            if (column === '*') {
                location.water.push([rowIndex, columnIndex]);
            }

            if (column === 'S') {
                location.hedgehog.push([rowIndex, columnIndex]);
            }

            return column;
        })
    );

    solution(R, C, M);
});

function solution(R, C, M) {
    const result = bfs(R, C, M);

    console.log(result);
}

function bfs(R, C, M) {
    const queue = [{ ...location, moveCount: 0 }];

    while (queue.length > 0) {
        const { water, hedgehog, moveCount } = queue.shift();
        const newWater = [];
        const newHedgehog = [];

        // 물이 먼저 이동해야 고슴도치가 물이 있는 곳은 가지 않는다.
        for (const [row, column] of water) {
            for (let i = 0; i < 4; i += 1) {
                const newRow = row + dy[i];
                const newCol = column + dx[i];

                // 행의 범위를 벗어날 수 없다.
                if (newRow < 0 || newRow >= R) {
                    continue;
                }
                // 열의 범위를 벗어날 수 없다.
                if (newCol < 0 || newCol >= C) {
                    continue;
                }
                // 돌을 통과할 수 없다.
                if (M[newRow][newCol] === 'X') {
                    continue;
                }
                // 비버의 소굴도 이동할 수 없다.
                if (M[newRow][newCol] === 'D') {
                    continue;
                }
                // 고슴도치의 영역도 이동할 수 없다.
                if (M[newRow][newCol] === 'S') {
                    continue;
                }
                // 같은 물을 통과할 수 없다.
                if (M[newRow][newCol] === '*') {
                    continue;
                }

                // 비어있는 곳은 이동하여 물로 채운다.
                if (M[newRow][newCol] === '.') {
                    M[newRow][newCol] = '*';
                    newWater.push([newRow, newCol]);
                }
            }
        }

        // 고슴도치 이동
        for (const [row, column] of hedgehog) {
            for (let i = 0; i < 4; i += 1) {
                const newRow = row + dy[i];
                const newCol = column + dx[i];

                // 행의 범위를 벗어날 수 없다.
                if (newRow < 0 || newRow >= R) {
                    continue;
                }
                // 열의 범위를 벗어날 수 없다.
                if (newCol < 0 || newCol >= C) {
                    continue;
                }
                // 돌을 통과할 수 없다.
                if (M[newRow][newCol] === 'X') {
                    continue;
                }
                // 물을 통과할 수 없다.
                if (M[newRow][newCol] === '*') {
                    continue;
                }
                // 같은 고슴도치의 영역도 이동할 수 없다.
                if (M[newRow][newCol] === 'S') {
                    continue;
                }

                // 비버의 소굴로 이동하게 되면 이동 횟수 1증가된 값을 반환 후 종료
                if (M[newRow][newCol] === 'D') {
                    return moveCount + 1;
                }

                // 비어있는 곳은 이동하여 고슴도치 영역으로 채운다.
                if (M[newRow][newCol] === '.') {
                    M[newRow][newCol] = 'S';
                    newHedgehog.push([newRow, newCol]);
                }
            }
        }

        // 고슴도치가 비버의 소굴에 들어가지 못하고 이동할 곳이 더이상 없다면 불가능한 입력 케이스다.
        if (newHedgehog.length === 0) {
            return 'KAKTUS';
        }

        // 물과 비버의 이동한 목록을 토대로 다시 이동한다. 이때 횟수를 1 증가
        queue.push({ water: newWater, hedgehog: newHedgehog, moveCount: moveCount + 1 });
    }
}

// 고슴도치 위치 : S
// 비버 굴 위치 : D
// 물이 차있는 지역 : *
// 돌 지역 : X
// 빈 지역 : .
// 행 : R
// 열 : C
