const rl = require("readline").createInterface(process.stdin, process.stdout);
const upDown = [-1, 1, 0, 0];
const leftRight = [0, 0, -1, 1];

let inputs = [];
let N;
let matrix;
let visited;
let result = [];

rl.on("line", (input) => {
    inputs.push(input);

    if(inputs[0] && Number(inputs[0]) === inputs.length - 1){
        rl.close();
    }

}).on("close", () => {
    solution();
})

function solution() {
    N = Number(inputs[0]);
    matrix = inputs.slice(1).map((value) => {
        return value.split("").map(value => Number(value));
    });
    visited = new Array(N);

    for (let i = 0; i < N; i++) {
      visited[i] = new Array(N).fill(false);
    }

    for(let i=0 ; i<N ; i++){
        for(let j=0 ; j<matrix[i].length ; j++){
            const start = matrix[i][j];

            if(start === 1 && !visited[i][j]){
                bfs(i, j);
            }
        }
    }
    console.log(result.length);
    result.sort((a, b) => a - b).map(value => console.log(value));
}

function bfs(x, y) {
    let queue = [];
    let count = 0;

    queue.push([x, y]);
    visited[x][y] = true;
    count++;

    while(queue[0]){
        const [qX, qY] = queue.shift();

        for(let i=0 ; i<4 ; i++){
            const length = qX + upDown[i];
            const width = qY + leftRight[i];

            if(length >= N || length < 0 || width >= N || width < 0) continue;

            if(!visited[length][width] && matrix[length][width] === 1){
                queue.push([length, width]);
                visited[length][width] = true;
                count++;
            }

        }
    }
    result.push(count);
}