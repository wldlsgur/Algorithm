const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const red = [];
const blue = [];


rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close" , () => {
    const [N, M] = inputs.shift().split(" ").map(Number);
    const info = inputs.splice(0, inputs.length).map((y, yIdx) => {
        return y.split("").map((x, xIdx) => {
            if(x === "B") blue.push([yIdx + 1, xIdx + 1]);
            if(x === "R") red.push([yIdx + 1, xIdx + 1]);
            
            return x;
        })
    })

    solution(N, M, info);
})

function solution(N, M, info) {
    const board = Array.from({ length : N + 2 }, () => new Array(M + 2).fill(-1));

    // 배열의 범위를 벗어나는 부분을 -1로 감싸준다.
    for(let i=1 ; i<=N ; i++) {
        for(let j=1 ; j<=M ; j++) {
            board[i][j] = info[i - 1][j - 1];
        }
    }

    console.log(bfs(N, M, board));
}

function bfs(N, M, board) {
    const [[rY, rX], [bY, bX]] = [red[0], blue[0]];
    const visited = Array.from({ length: N + 2 }, () => Array.from({ length: M + 2 }, () => Array.from({ length: N + 2 }, () => new Array(M + 2).fill(false))));
    const queue = [[rY, rX, bY, bX, 0]]; // 빨간 구슬 좌표와 파란 구슬 좌표 그리고 횟수를 초기값으로 넣는다.

    visited[rY][rX][bY][bX] = true;

    let day = -1; // 기본 반환 값

    while(queue.length > 0) {
        const [rY, rX, bY, bX, moveCount] = queue.shift();

        // 횟수가 10이 넘어가면 실패
        if(moveCount > 10) {
            break;
        }
        // 빨간 구슬만 들어가고 파란 구슬은 들어가지 않는 경우가 유일하게 성공함
        if(board[rY][rX] === 'O' && board[bY][bX] !== 'O') {
            day = moveCount;
            break;
        }

        // 현재 좌표에서 4방향으로 구슬을 굴린다.
        for(let dir=0 ; dir<4 ; dir++) {
            // 현재 좌표부터 확인 시작
            let [nextRY, nextRX, nextBY, nextBX] = [rY, rX, bY, bX];
            
            // 빨간 구슬 돌리기
            while(true) {
                // 이미 이동한 좌표가 벽도 아니고 배열의 범위를 벗어나지도 않고 구멍도 아니라면 다음 방향으로 이동
                if(board[nextRY][nextRX] !== '#' && board[nextRY][nextRX] !== "O" && board[nextRY][nextRX] !== -1) {
                    nextRY += dy[dir];
                    nextRX += dx[dir];
                }
                else {
                    // 만약 이동한 좌표가 벽이나 배열 범위를 벗어나면 한 칸 뒤로 다시 배치시켜야함
                    // 여기서 해당 조건문에 걸리지 않으면 구슬이 구멍 안에 들어가게 된다.
                    if(board[nextRY][nextRX] === "#" || board[nextRY][nextRX] === -1) {
                        nextRY -= dy[dir];
                        nextRX -= dx[dir];
                    }
                    // 구슬을 끝까지 굴렸으니 종료
                    break;
                }
            }     
            
            // 파란 구슬 돌리기
            while(true) {
                // 이미 이동한 좌표가 벽도 아니고 배열의 범위를 벗어나지도 않고 구멍도 아니라면 다음 방향으로 이동
                if(board[nextBY][nextBX] !== '#' && board[nextBY][nextBX] !== "O" && board[nextBY][nextBX] !== -1) {
                    nextBY += dy[dir];
                    nextBX += dx[dir];
                }
                else {
                    // 만약 이동한 좌표가 벽이나 배열 범위를 벗어나면 한 칸 뒤로 다시 배치시켜야함
                    // 여기서 해당 조건문에 걸리지 않으면 구슬이 구멍 안에 들어가게 된다.
                    if(board[nextBY][nextBX] === "#" || board[nextBY][nextBX] === -1) {
                        nextBY -= dy[dir];
                        nextBX -= dx[dir];
                    }
                    // 구슬을 끝까지 굴렸으니 종료
                    break;
                }
            }   

            // 파란 구슬과 빨간 구슬을 다 굴리고 만약에 같은 위치에 있다면
            if(nextRY === nextBY && nextRX === nextBX) {
                // 그 위치가 구멍이 아닌 '.'의 공간이라면 더 많이 움직인 구슬을 한 칸 뒤로 움직여서 자리를 맞춰준다.
                if(board[nextRY][nextRX] !== 'O') {
                    // 거리 계산은 어느 방향인지 모르기에 움직이지 않는 방향은 계산하면 0이 나온다.
                    // |기존 높이 - 이동한 높이| + |기존 넓이 - 이동한 넓이| 
                    const rDistance = Math.abs(nextRY - rY) + Math.abs(nextRX - rX);
                    const bDistance = Math.abs(nextBY - bY) + Math.abs(nextBX - bX);

                    // 빨간 구슬이 더 많이 움직였으면 빨간 구슬을 한 칸 뒤로 움직인다.
                    if(rDistance > bDistance) {
                        nextRY -= dy[dir];
                        nextRX -= dx[dir];
                    }
                    // 파란 구슬이 더 많이 움직였으면 파란 구슬을 한 칸 뒤로 움직인다.
                    else {
                        nextBY -= dy[dir];
                        nextBX -= dx[dir];
                    }
                }
            }
            // 빨간 구슬과 파란 구슬 두 구슬이 위치한 좌표는 이미 상 하 좌 우로 다 탐색해봐서 더이상 탐색을 안해도 된다.
            if(!visited[nextRY][nextRX][nextBY][nextBX]) {
                visited[nextRY][nextRX][nextBY][nextBX] = true;
                queue.push([nextRY, nextRX, nextBY, nextBX, moveCount + 1]);
            }
        }
    }
    return day;
}