const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close" , () => {
    const [M, N] = inputs[0].split(" ").map(Number);
    const heights = inputs.slice(1).map(value => value.split(" ").map(Number));

    solution(M, N, heights);
})

function solution(M, N, heights) {
    const DP = Array.from({length : M}, () => new Array(N).fill(-1));
    DP[M - 1][N - 1] = 1; // 목적지 좌표에 1을 할당해준다. 도착하면 1을 반환하기 위해서

    console.log(dfs(M, N, heights, DP, [0, 0]));
}

function dfs(M, N, heights, DP, [y, x]) {
    // -1은 아직 미방문
    // 0은 방문했지만 목적지까지 길이 존재하지 않음
    // 0보다 큰 정수는 이 길을 통해 목적지로 갈 수 있는 길의 개수
    if(DP[y][x] !== -1) return DP[y][x];

    // 초기 값으로 방문 했다는 표시를 위해 0으로 지정
    let count = 0;

    // 상 하 좌 우 탐색
    for(let i=0; i<4 ; i++) {
        const currentNumber = heights[y][x];
        const [newY, newX] = [y + dy[i], x + dx[i]];

        // 배열의 범위 벗어나면 생략
        if(newY < 0 || newY >= M || newX < 0 || newX >= N) continue;

        // 다음 이동할 곳이 현재보다 더 작을때 dfs 탐색
        if(currentNumber > heights[newY][newX]) {
            count += dfs(M, N, heights, DP, [newY, newX]);
        }
    }

    // 현재 좌표에서 상 하 좌 우 탐색 후 찾을 수 있는 길 count 값을 현재 좌표 DP 배열에 저장
    DP[y][x] = count;

    return count;
}