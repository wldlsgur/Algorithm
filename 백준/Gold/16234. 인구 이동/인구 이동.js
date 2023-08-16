const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close" , () => {
    const [N, L, R] = inputs.shift().split(" ").map(Number);
    const population = inputs.map(value => value.split(" ").map(Number));

    solution(N, L, R, population);
})

function solution(N, L, R, population) {
    let day = 0;
    
    // 국경선이 열리지 않을때 까지 반복한다
    while(true) {
        // 인구 이동 후 다시 새로 인구 이동을 해야하기에 visited 배열은 계속 생성
        const visited = Array.from({length : N}, () => new Array(N).fill(false));
        // 국경선이 열렸는지 여부
        let isOpen = false; 

        // i : 높이, j : 넓이
        for(let i=0; i<N ; i++) {
            for(let j=0; j<N ; j++) {
                // 방문하지 않는 땅을 발견하면 인구이동을 시도한다.
                if(!visited[i][j]) {
                    // 인구 이동 후에 인구 이동 할 배열 좌표 result, 총 인구 수 반환
                    const {result, totalSum} = bfs(N, L, R, population, visited, i, j);

                    // 만약 인구이동이 된 경우
                    if(result.length > 1) {
                        // 인구 이동할 좌표에 평균 값을 할당한다.
                        setAverage(result, totalSum, population);
                        // 인구 이동 여부를 갱신
                        isOpen = true;
                    }
                }
            }
        }
        // 만약 인구이동이 발생하지 않았다면 종료
        if(!isOpen) break;
        // 날짜 하루 증가
        day++;
    }

    console.log(day);
}

function bfs(N, L, R, population, visited, y, x) {
    const queue = [[y, x]];
    const result = [[y, x]]; // 이동할 땅 좌표
    let totalSum = population[y][x]; // 총 인구수

    visited[y][x] = true;

    while(queue.length > 0) {
        const [y, x] = queue.shift();


        for(let i=0 ; i<4 ; i++) {
            const nextY = y + dy[i];
            const nextX = x + dx[i];

            // 배열의 범위를 벗어나면 생략
            if(nextY < 0 || nextY >= N || nextX < 0 || nextX >= N) continue;

            const currentNumber = population[y][x]; // 현재 땅 인구수
            const nextNumber = population[nextY][nextX]; // 다음 땅 인구수
            const isOpenNumber = Math.abs(currentNumber - nextNumber); // 현재 인구 - 다음 인구

            // 방문하지 않았고 다음 땅이 이동 조건을 만족하면
            if(!visited[nextY][nextX] && isOpenNumber >= L && isOpenNumber <= R) {
                result.push([nextY, nextX]); // 갱신할 땅의 좌표를 넣고
                queue.push([nextY, nextX]); // 큐에 넣고
                totalSum += nextNumber; // 총 인구수에 누적 합
                visited[nextY][nextX] = true; // 다음 땅 방문처리
            }
        }
    }
    // 갱신할 땅 result, 총 인구수 반환 
    // 만약 이동이 없다면 인자의 y,x만 들어있음
    return {result, totalSum};
}

function setAverage(targetArr, sum, population) {
    const average = Math.floor(sum / targetArr.length);

    for(const [y, x] of targetArr) {
        population[y][x] = average;
    }
}