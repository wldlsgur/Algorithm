const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const sharkLocation = [0, 0];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
let sharkSize = 2;
let eatenFish = 0;

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const N = Number(inputs[0]);
    const Matrix = inputs.slice(1).map((col, colIdx) => {
        return col.split(" ").map((row, rowIdx) => {
            const number = Number(row);
            
            // 초기 상어의 위치를 저장
            if (number === 9) {
                sharkLocation[0] = colIdx;
                sharkLocation[1] = rowIdx;
            }

            return number;
        });
    });

    solution(N, Matrix);
});

function solution(N, Matrix) {
    let [startY, startX] = sharkLocation;
    let answer = 0;

    // 더 이상 먹을 수 없을 때 까지 bfs를 통해 먹이를 찾는다.
    while(true) {
        const [y, x, distance] = bfs(N, Matrix, startY, startX);

        // 만약 먹이를 찾을 수 없는 경우 [0, 0, 0]이 반환되므로 종료
        if(!distance && !y && !x) break;
        
        // 먹은 먹이의 위치를 기준으로 다시 아기상어가 먹이를 찾는다.
        answer += distance; // 먹이의 길이를 누적 해준다.
        startY = y; // 찾은 먹이의 y기준으로 갱신
        startX = x; // 찾은 먹이의 x기준으로 갱신

        eatenFish++; // 총 먹은 물고기의 개수를 누적 해준다.

        // 만약 상어 사이즈와 먹은 물고기의 개수가 같다면
        if (eatenFish === sharkSize) {
          sharkSize++; // 상어 크기를 1 증가
          eatenFish = 0; // 먹이 횟수를 초기화
        }
    }

    console.log(answer);
}

function bfs(N, Matrix, startY, startX) {
    const visited = Array.from({ length: N }, () => new Array(N).fill(false));
    const queue = [[startY, startX, 0]];

    let fishList = []; // 먹을 수 있는 물고기들을 저장하는 배열

    visited[startY][startX] = true; // 아기 상어 위치를 방문 처리
    Matrix[startY][startX] = 0; // 아기 상어 위치는 이미 물고기를 먹은 위치이므로 빈 칸으로 최신화

    // 아기 상어 위치 기준으로 먹을 수 있는 물고기의 모든 위치를 찾아낸다.
    while (queue.length > 0) {
        const [col, row, distance] = queue.shift();

        // 상 하 좌 우 인접한 한 칸씩 이동
        for (let i = 0; i < 4; i++) { 
            const newCol = col + dy[i];
            const newRow = row + dx[i];

            // 배열의 범위를 벗어나면 생략
            if (newCol < 0 || newCol >= N || newRow < 0 || newRow >= N) continue;

            // 아기 상어가 지나갈 수 있는 경우
            if (Matrix[newCol][newRow] <= sharkSize && !visited[newCol][newRow]) {
                visited[newCol][newRow] = true;
                queue.push([newCol, newRow, distance + 1]);

                // 지나갈 수 있는 위치가 아기 상어가 먹을 수 있는 물고기가 있는 경우
                if (Matrix[newCol][newRow] !== 0 && Matrix[newCol][newRow] < sharkSize) {
                  fishList.push([newCol, newRow, distance + 1]);
                }
            }
        }
    }

    // 아기 상어 위치 기준으로 먹을 수 있는 물고기 리스트가 없을 경우
    if(fishList.length < 1) return [0, 0, 0];

    // 물고기 리스트에서 거리가 가장 가까운 먹이를 먹는다.
    // 가까운 먹이가 여러 개 경우 가장 위에 있는 물고기 > 가장 왼쪽에 있는 물고기
    fishList.sort((a, b) => {
        if (a[2] === b[2]) {  // 거리가 같다면
            if (a[0] === b[0]) { // 만약 높이가 같다면 길이로 비교
                return a[1] - b[1];
            }
            return a[0] - b[0]; // 높이가 같지 않다면 높이가 높은거 부터
        }
        return a[2] - b[2]; // 거리가 같지 않다면 거리가 가까운 순서
    });

    const [minCol, minRow, minDist] = fishList[0]; // 가장 가까운 조건을 만족하는 물고기를 가져온다.
    
    return [minCol, minRow, minDist]; // 해당 아기 상어에 대한 제일 가까운 조건을 만족하는 물고기 위치와 거리를 반환
}
