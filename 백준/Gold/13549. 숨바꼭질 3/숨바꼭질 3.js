const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const [N, K] = inputs.shift().split(" ").map(Number);

  solution(N, K);
})

function solution(N, K) {
  console.log(bfs(N, K));
}

function bfs(start, arrive) {
  const visited = new Array(100001).fill(false);
  const queue = [[start, 0]];

  visited[start] = true;

  while(queue.length > 0) {
    const [number, count] = queue.shift();

    if(number === arrive) {
      return count;
    }

    for(const next of [number * 2, number - 1, number + 1]) {
      if(next < 0 || next > 100000 || visited[next]) {
        continue;
      }

      // 0초의 연산은 큐의 맨 앞에 넣고
      if(next === number * 2) {
        queue.unshift([next, count]);
      }
      // 1초의 연산은 큐의 마지막에 넣는다.
      else {
        queue.push([next, count + 1]);
      }

      visited[next] = true;
    }
  }
}