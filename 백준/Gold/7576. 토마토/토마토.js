const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const inputs = [];
const dcol = [-1, 1, 0, 0];
const drow = [0, 0, -1, 1];

rl.on("line", (input) => {
    inputs.push(input);
}).on("close", () => {
    const [M, N] = inputs[0].split(" ").map(Number);
    const tomatoInfo = inputs.slice(1, inputs.length);

    solution(M, N, tomatoInfo);
});

function solution(M, N, tomatoInfo) { // M : 가로 , N : 세로
    let underripe = 0;
    const startPoint = [];
    const matrix = tomatoInfo.map((value, colIndex) => {
        return value.split(" ").map((value, rowIndex) => {
            const number = Number(value);

            if(number === 1) startPoint.push([colIndex, rowIndex]); // 익은 사과 좌표
            if(number === 0) underripe++; // 덜 익은 사과 갯수

            return number;
        });
    });

    if(underripe === 0) return console.log(0);

    const [totalDay, ripeTomatoes] = bfs(matrix, startPoint, M, N);
    if (ripeTomatoes !== underripe) return console.log(-1);
    else console.log(totalDay);
}

function bfs(matrix, startPoint, M, N) { // M : 가로, N : 세로
    let ripeTomatoes = 0; // 익게 한 토마토
    let totalDay = 0; // 날짜
    let queueIndex = 0;
    const queue = [];

    startPoint.map(value => queue.push([...value, 0]));
        
    while (queue[queueIndex]) {
        const [col, row, day] = queue[queueIndex++];
        totalDay = day;

        for (let i = 0; i < 4; i++) {
            const newCol = col + dcol[i];
            const newRow = row + drow[i];

            if (newCol >= 0 && newCol < N && newRow >= 0 && newRow < M && matrix[newCol][newRow] === 0) {
                ripeTomatoes++;
                queue.push([newCol, newRow, day + 1]);
                matrix[newCol][newRow] = 1;
            }
        }
    }
    return [totalDay, ripeTomatoes];
}
