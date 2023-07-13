const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close" , () => {
  let max = 0;
  const N = Number(inputs[0]);
  const list = inputs.slice(1, inputs.length).map((hight, hIndex) => {
    return hight.split(" ").map((widht, wIndex) => {
      const number = Number(widht);

      if(number > max) max = number; // 배열에서 최대 값 추출

      return number;
    });
  })

  solution(N, list, max);
})

function solution(N, list, max) {
  let maxResult = 0;

  // 물에 잠길 최대 높이를 0 부터 최대값까지 완전 탐색
  for (let i = 0; i <= max; i++) {
    const vistied = Array.from({ length: N }, () => new Array(N).fill(false)); // 물에 잠길 최대 높이마다 visited 배열 새로 생성
    let count = 0;

    for (let j = 0; j < N; j++) {
      for (let z = 0; z < N; z++) {
        if (list[j][z] > i && !vistied[j][z]) { // 최대 높이보다 크고 방문하지 않았을때 bfs 실행
          count++;
          bfs(i, j, z, vistied, list, N);
        }
      }
    }
    if (maxResult < count) maxResult = count;
  }
  console.log(maxResult);
}

function bfs(maxHight, startH, startW, vistied, list, N) {
  const queue = [];

  queue.push([startH, startW]);
  vistied[startH][startW] = true;

  while(queue.length > 0) {
    const [h, w] = queue.shift();

    for(let i=0; i<4 ; i++) {
      const newH = h + dy[i];
      const newW = w + dx[i];

      if(newH < 0 || newH >= N || newW < 0 || newW >= N) continue; // 범위 벗어나면 생략

      if(list[newH][newW] > maxHight && !vistied[newH][newW]) { // 연결된 번호 중 최대 높이보다 크고 방문하지 않았다면 queue 삽입 후 방문 처리
        queue.push([newH, newW]);
        vistied[newH][newW] = true;
      }
    }
  }
}