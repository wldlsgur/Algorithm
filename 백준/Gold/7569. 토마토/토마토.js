const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const d = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]]; // 위 아래 층, 상 하, 좌 우
const inputs = [];
const ripes = [];
let nones = 0;
let visited;

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const [M, N, H] = inputs[0].split(" ").map(Number);
  const floor = Array.from({ length: H }, () => Array.from({ length: N }, () => new Array(M).fill(0)));

  inputs.slice(1).forEach((line, i) => {
    const row = i % N;
    const floorIdx = Math.floor(i / N);
    const rowArr = line.split(" ").map(Number);

    rowArr.forEach((tomato, colIdx) => {
      floor[floorIdx][row][colIdx] = tomato;
      if (tomato === 1) ripes.push([floorIdx, row, colIdx]);
      if (tomato === 0) nones++;
    });
  });

  solution(M, N, H, floor);
});

function solution(M, N, H, floor) {
  visited = Array.from({ length: H }, () => Array.from({ length: N }, () => new Array(M).fill(false)));

  if (nones === 0) return console.log(0); // 익은 토마토가 없으면 0 출력 종료

  const [day, count] = bfs(M, N, H, floor);

  nones === count ? console.log(day) : console.log(-1);
}

function bfs(M, N, H, floor) {
  const queue = [];
  let days = 0;
  let count = 0;
  let queueIndex = 0;

  for (const ripe of ripes) { // 익은 토마토 층 수와 좌표를 모두 0일 출발로 큐에 저장
    const [startZ, startY, startX] = ripe;

    queue.push([startZ, startY, startX, 0]);
    visited[startZ][startY][startX] = true;
  }

  while (queue[queueIndex]) {
    const [z, y, x, day] = queue[queueIndex++];
    days = day;

    for (let i = 0; i < 6; i++) {
      const newZ = z + d[i][0]; // 새로운 층
      const newY = y + d[i][1]; // 새로운 상 하
      const newX = x + d[i][2]; // 새로운 좌 우

      if (newY < 0 || newY >= N || newX < 0 || newX >= M || newZ < 0 || newZ >= H) continue;

      if (!visited[newZ][newY][newX] && floor[newZ][newY][newX] === 0) {
        count++;
        visited[newZ][newY][newX] = true;
        queue.push([newZ, newY, newX, day + 1]);
      }
    }
  }
  return [days, count];
}