const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
let result = 0;

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close" , () => {
  const [M, N] = inputs[0].split(" ").map(Number);
  const heights = inputs.slice(1).map(value => value.split(" ").map(Number));

  solution(M, N, heights);
})

function solution(M, N, heights) {
  // 방문 여부 확인 2차원 배열
  const visited = Array.from({length : M}, () => new Array(N).fill(false));

  dfs(M, N, heights, visited, [0, 0]);

  console.log(result);
}

function dfs(M, N, heights, visited, start) {
  const [y, x] = start;

  // 만약 현재 방문 중인 좌표가 배열의 오른쪽 맨 아래라면 길 1개 증가 후 현재 함수 종료
  if(y === M - 1 && x === N - 1) return result++;

  visited[y][x] = true;
  
  // 상 하 좌 우 탐색
  for(let i=0; i<4 ; i++) {
    const currentNumber = heights[y][x];
    const newY = y + dy[i];
    const newX = x + dx[i];

    // 배열의 범위 벗어나면 생략
    if(newY < 0 || newY >= M || newX < 0 || newX >= N) continue;

    // 다음 이동할 곳이 현재보다 더 작을때 dfs 탐색
    if(currentNumber > heights[newY][newX]) {
      dfs(M, N, heights, visited, [newY, newX]);
      // 방문 후 돌아오면 다시 방문 처리를 해제해준다.
      visited[newY][newX] = false;
    }
  }
}