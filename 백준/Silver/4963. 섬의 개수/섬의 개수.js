const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const dy = [-1, 1, 0, 0, -1, -1, 1, 1];
const dx = [0, 0, -1, 1, -1, 1, -1, 1];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close" , () => {
  while(true) {
    const earth = [];
    const [W, H] = inputs.splice(0, 1)[0].split(" ").map(Number);

    if(W === 0 && H === 0) break;

    const list = inputs.splice(0, H).map((value, yIndex) => {
      return value.split(" ").map((value, xIndex) => {
        const area = Number(value);

        if(area === 1) earth.push({y: yIndex, x: xIndex});

        return area;
      });
    })

    solution(W, H, list, earth);
  }
})

function solution(W, H, list, earth) {
  if(earth.length === 0) return console.log(0);

  const visited = Array.from({length : H}, () => new Array(W).fill(false));
  let result = 0;

  for(const XY of earth) {
    const {y: hight, x: widht} = XY;

    if(!visited[hight][widht]) {
      result++;
      bfs(W, H, list, visited, hight, widht);
    }
  }

  console.log(result);
}

function bfs(W, H, list, visited, startHight, startWidht) {
  const queue = [];

  queue.push([startHight, startWidht]);
  visited[startHight][startWidht] = true;

  while(queue.length > 0) {
    const [hight, widht] = queue.shift();

    for(let i=0 ; i<8 ; i++) { // 상 하 좌 우 대각선 검사
      const newHight = hight + dy[i];
      const newWidht = widht + dx[i];

      if(newHight < 0 || newHight >= H || newWidht < 0 || newWidht >= W) continue;

      if(!visited[newHight][newWidht] && list[newHight][newWidht] === 1) {
        visited[newHight][newWidht] = true;
        queue.push([newHight, newWidht]);
      }
    }
  }
}