const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

let nonBlindVisited = [];
let blindVisited = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const N = Number(inputs[0]);
    const array = inputs.slice(1, inputs.length).map(value => value.split(""));

    solution(N, array);
});

function solution(N, array) {
    const result = [0, 0];
    nonBlindVisited = Array.from({ length: N }, () => new Array(N).fill(false));
    blindVisited = Array.from({ length : N }, () => new Array(N).fill(false));

    for(let i=0; i<N ; i++){
        for(let j=0; j<N ; j++){
            if(!nonBlindVisited[i][j]) {
                result[0]++;
                bfs(i, j, array, N, false);
            }
            if(!blindVisited[i][j]) {
                result[1]++;
                bfs(i, j, array, N, true);
            }
        }
    }
    console.log(result[0], result[1]);
}

function bfs(i, j, array, N, isBlind) {
    const color = array[i][j];
    const queue = [];

    isBlind ? blindVisited[i][j] = true : nonBlindVisited[i][j] = true;
    queue.push([i, j]);

    while(queue.length > 0) {
        const [y, x] = queue.shift();

        for(let z=0; z<4 ; z++) {
            const newY = y + dy[z];
            const newX = x + dx[z];

            if(newY < 0 || newY >= N || newX < 0 || newX >= N) continue;
            
            // 적록색약이 아닐때
            if(!isBlind && !nonBlindVisited[newY][newX] && array[newY][newX] === color) {
                nonBlindVisited[newY][newX] = true;
                queue.push([newY, newX]);
                continue;
            }

            let blindColor = color;

            if (color === "R") blindColor = "G";
            if (color === "G") blindColor = "R";

            // 적록색약인 경우
            if(isBlind && !blindVisited[newY][newX]) {
                if(array[newY][newX] === color || array[newY][newX] === blindColor) {
                    blindVisited[newY][newX] = true;
                    queue.push([newY, newX]);
                }
            }
        }
    }
}