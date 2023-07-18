const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const dy = [-2, -2, -1, -1, 1, 1, 2, 2];
const dx = [-1, 1, -2, 2, -2, 2, -1, 1];


rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close" , () => {
  const testCase = Number(inputs.splice(0, 1)[0]);
  
  for(let i=0 ; i<testCase ; i++) {
    const I = Number(inputs.splice(0, 1)[0]); // 배열 크기 추출
    const current = inputs.splice(0, 1)[0].split(" ").map(Number); // 현재 좌표 추출
    const move = inputs.splice(0, 1)[0].split(" ").map(Number); // 목표 좌표 추출

    solution(I, current, move);
  }
});

function solution(I, current, move) {
  const visited = Array.from({ length: I }, () => new Array(I).fill(false));

  const result = bfs(visited, current, move, I);
  console.log(result);
}

function bfs(visited, current, move, I) {
  const queue = [];

  queue.push([current[0], current[1], 0]); // 현재 좌표를 시작으로 카운트 0 부터 시작
  visited[current[0]][current[1]] = true;
  
  while(queue.length > 0) {
    const [x, y, count] = queue.shift();

    // 목표 좌표와 현재 좌표가 같다면 현재 카운트 값 반환
    if(x === move[0] && y === move[1]) return count;

    // 이동할 수 있는 모든 거리에 대한 bfs 탐색
    for(let i=0 ; i<8 ; i++) {
      const newY = y + dy[i];
      const newX = x + dx[i];

      if(newX < 0 || newX >= I || newY < 0 || newY >= I) continue;

      if(!visited[newX][newY]) {
        visited[newX][newY] = true;
        queue.push([newX, newY, count + 1]);
      }
    }
  }
}