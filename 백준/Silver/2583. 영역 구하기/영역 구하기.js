const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const walls = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

rl.on("line" , (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const [N, M, K] = inputs[0].split(" ").map(Number);
  for (let i = 1; i <= K; i++)  walls.push(inputs[i].split(" ").map(Number));

  solution(N, M, K);
})

function solution(N, M, K) {
  // M이 높이 N이 넓이라고 생각
  const matrix = Array.from({length : M}, () => new Array(N).fill(0));
  const visited = Array.from({ length: M }, () => new Array(N).fill(false));
  const result = [];

  // 주어진 모눈 종이 정보를 M : 높이 N : 넓이 라고 생각하고 해당 범위를 1로 벽을 세워준다.
  for(let i=0; i<K ; i++) {
    const [x1, x2, y1, y2] = walls[i]; // 0 2 4 4 

    for(let j=x2 ; j<y2 ; j++) { // 2 ~ 4
      for(let z=x1 ; z<y1 ; z++) { // 0 ~ 4
        matrix[z][j] = 1;
      }
    }
  }

  // 매트릭스를 순회하면서 방문하지 않았거나 0인 부분을 dfs로 탐색한다.
  for(let i=0; i<M ; i++) {
    for(let j=0; j<N ; j++) {
      if(matrix[i][j] === 0 && !visited[i][j]) {
        result.push(dfs(matrix, visited, i, j, M, N));
      }
    }
  }
  
  result.sort((a, b) => a - b);

  console.log(result.length);
  console.log(...result);
}

function dfs(matrix, visited, i, j, M, N) {
  let count = 1; // 하나의 dfs 재귀 스택은 1이라는 값을 가진다.
  visited[i][j] = true;

  // 상 하 좌 우 탐색
  for(let k=0 ; k<4 ; k++) {
    const newH = i + dy[k];
    const newW = j + dx[k];

    // 매트릭스 범위를 벗어나면 생략
    if(newH < 0 || newH >= M || newW < 0 || newW >= N) continue;

    // 방문할 곳이 있다면 추가적으로 더 깊이 탐색하고
    if(!visited[newH][newW] && matrix[newH][newW] === 0) {
      visited[newH][newW] = true;
      // 방문할 곳이 없어 모두 탐색이 끝나면 이전 재귀 스택으로 1을 추가로 반환
      count += dfs(matrix, visited, newH, newW, M, N, count + 1);
    }
  }
  // 최종 재귀 스택은 재귀 스택 호출 많큼 숫자를 갖는다. = 한 번의 재귀 스택이 범위 1를 차지
  return count;
}