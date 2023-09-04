const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const [N, M] = inputs.shift().split(" ").map(Number);
    const info = inputs.map(value => value.split(" ").map(Number));

    solution(N, M, info);
});

function solution(N, M, info) {
    let yearCount = 0;

    while(true) {
        const visited = Array.from({ length : N }, () => new Array(M).fill(false));
        const copyInfo = [];
        let area = 0;

        for(let i=0 ; i<N ; i++) {
            copyInfo.push([...info[i]]);
        }

        for(let i=0 ; i<N ; i++) {
            for(let j=0 ; j<M ; j++) {
                if(info[i][j] !== 0) {
                    meltIce(info, copyInfo, i, j, N, M);
                }
            }
        }

        for(let i=0 ; i<N ; i++) {
            info[i] = [...copyInfo[i]];
        }

        yearCount++;

        for(let i=0 ; i<N ; i++) {
            for(let j=0 ; j<M ; j++) {
                if(info[i][j] !== 0 && !visited[i][j]) {
                    area++;
                    bfs(info, visited, N, M, i, j);
                }
            }
        }

        if(area === 0) {
            console.log(0);
            break;
        }
        if(area >= 2) {
            console.log(yearCount);
            break;
        }
    }
}

function bfs(info, visited, N, M, startY, startX) {
    const queue = [[startY, startX]];

    visited[startY][startX] = true;

    while(queue.length > 0) {
        const [y, x] = queue.shift();

        for(let i=0 ; i<4 ; i++) {
            const newY = y + dy[i];
            const newX = x + dx[i];
    
            if(newY < 0 || newY >= N || newX < 0 || newX >= M) {
                continue;
            }
    
            if(info[newY][newX] !== 0 && !visited[newY][newX]) {
                visited[newY][newX] =true;
                queue.push([newY, newX]);
            }
        }
    }
}

function meltIce(info, copyInfo, y, x, N, M) {
    let seaCount = 0;

    for(let i=0 ; i<4 ; i++) {
        const newY = y + dy[i];
        const newX = x + dx[i];

        if(newY < 0 || newY >= N || newX < 0 || newX >= M) {
            continue;
        }

        if(info[newY][newX] === 0) {
            seaCount++;
        }
    }

    if(copyInfo[y][x] - seaCount > 0) {
        copyInfo[y][x] -= seaCount;
    }
    else {
        copyInfo[y][x] = 0;
    }
}