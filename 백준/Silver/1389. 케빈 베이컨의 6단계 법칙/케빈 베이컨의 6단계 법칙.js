const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const [N, M] = inputs[0].split(" ").map(Number);
  const relationship = inputs.slice(1).map(value => value.split(" ").map(Number));

  solution(N, M, relationship);
})

function solution(N, M, relationship) {
  const list = {};
  const result = [];

  for(let i=1 ; i<=N ; i++) {
    list[i] = [];
  }

  for(const [start, arrive] of relationship) {
    list[start].push(arrive);
    list[arrive].push(start);
  }

  for(let i=1; i<=N ; i++) {
    let costSum = 0;

    for(let j=1 ; j<=N ; j++) {
      if(i === j) continue;

      const visited = new Array(N + 1).fill(false);
      const cost = bfs(i, j, list, visited);

      costSum += cost;
    }
    result.push([i, costSum]);
  }
  result.sort((a, b) => {
    if(a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  })

  console.log(result[0][0]);
}

function bfs(start, arrive, list, visited) {
  const queue = [[start, 0]];

  visited[start] = true;

  while(queue.length > 0) {
    const [node, cost] = queue.shift();

    if(node === arrive) return cost;

    for (const nextNode of list[node]) {
      if (!visited[nextNode]) {
        queue.push([nextNode, cost + 1]);
      }
    }
  }
}
