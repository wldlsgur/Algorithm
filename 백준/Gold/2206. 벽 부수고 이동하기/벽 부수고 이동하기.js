const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const [N, M] = inputs[0].split(" ").map(Number);
  const array = inputs.slice(1, inputs.length).map(value => value.split("").map(Number));

  solution(N, M, array);
});

function solution(N, M, array) {
  console.log(bfs(N, M, array));
}

function bfs(N, M, array) {
  // visited 배열을 3차원으로 변경하여 벽을 부술 수 있는 기회가 남아 있는지 여부를 함께 저장합니다.
  const visited = Array.from({length : N}, () => Array.from({length: M}, () => Array(2).fill(false)));

  const queue = []; // 큐 생성
  let queueIndex = 0;

  // 시작점은 이미 방문 처리하고 큐에 삽입합니다. chance는 벽을 부술 수 있는 기회를 의미합니다 (1: 가능, 0: 불가능).
  visited[0][0][1] = true;
  queue.push([0, 0, 1, 1]);  // [높이, 너비, 현재 이동 거리, 벽 부술 기회]

  while(queue[queueIndex]) {
    // 큐에서 현재 위치, 이동 거리, 벽 부술 기회를 가져옵니다.
    const [height, width, count, chance] = queue[queueIndex++];

    // 도착지에 도달한 경우, 이동 거리를 반환합니다.
    if(height === N - 1 && width === M - 1) return count;

    // 상하좌우로 이동하면서 인접한 칸 확인
    for(let i = 0; i < 4; i++) {
      const newH = height + dy[i];
      const newW = width + dx[i];

      // 배열 범위를 벗어나면 무시
      if(newH < 0 || newH >= N || newW < 0 || newW >= M) continue;

      // 방문하지 않은 위치이고 빈 칸인 경우
      if(!visited[newH][newW][chance] && array[newH][newW] === 0) {
        visited[newH][newW][chance] = true;
        queue.push([newH, newW, count + 1, chance]);
      }
      
      // 벽을 만났지만, 벽을 부술 기회가 남아있는 경우
      if(array[newH][newW] === 1 && chance === 1 && !visited[newH][newW][0]) {
        visited[newH][newW][0] = true;
        queue.push([newH, newW, count + 1, 0]);
      }
    }
  }
  // 도착지에 도달할 수 없는 경우 -1 반환
  return -1;
}
