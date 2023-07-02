
const rl = require("readline").createInterface(process.stdin, process.stdout);
const upDown = [-1, 1, 0, 0];
const leftRight = [0, 0, -1, 1];

let minCount = []; // dfs때 사용
let N = 0;
let M = 0;
let maze = [];
let inputs = []; 

rl.on("line", (input) => {
    inputs.push(input);

    if (inputs[0] && Number(inputs[0].split(" ")[0]) + 1 === inputs.length) {
        rl.close();
    }
}).on("close", () => {
    solution();
 });

function solution() {
    const NM = inputs[0].split(" ").map(value => Number(value));
    N = NM[0];
    M = NM[1];
    maze = inputs.slice(1).map((value) => {
        return value.split("").map(value => Number(value));
    });

    //dfs(0, 0, 1); // 시간 초과 문제
    //console.log(Math.min(...minCount));

    const result = bfs(0, 0, 1);
    console.log(result);
}
function bfs(x, y, count){
    let queue = [];

    maze[x][y]++; // 방문 표시
    queue.push([x, y, count]); // enQueue

    while(queue.length){
        const [qX, qY, qCount] = queue.shift(); // deQueue

        if (qX === N - 1 && qY === M - 1) {
            return qCount;
        }

        for(let i=0 ; i<4 ; i++){ // 상 하 좌 우 검사
            const newX = qX + upDown[i];
            const newY = qY + leftRight[i];
            
            if(newX >= N || newX < 0 || newY >= M || newY < 0) continue; // 배열 범위 검사

            if (maze[newX][newY] === 1) { // 인접 범위 중 방문하지 않은 곳이 있다면 enQueue
                maze[newX][newY]++;
                queue.push([newX, newY, qCount + 1]);
            }
        }
    }
}

function dfs(x, y, count){
    maze[x][y]++;

    if(x === N - 1 && y === M - 1){
        return minCount.push(count);
    }

    if(y + 1 < M && maze[x][y + 1] === 1) {
        dfs(x, y + 1, count + 1);
        maze[x][y + 1]--;
    }
    if(x + 1 < N && maze[x + 1][y] === 1) {
        dfs(x + 1, y, count + 1);
        maze[x + 1][y]--;
    }
    if(x - 1 >= 0  && maze[x - 1][y] === 1) {
        dfs(x - 1, y, count + 1);
        maze[x - 1][y]--;
    }
    if(y - 1 >= 0 && maze[x][y - 1] === 1) {
        dfs(x, y - 1, count + 1);
        maze[x][y - 1]--;
    }
}