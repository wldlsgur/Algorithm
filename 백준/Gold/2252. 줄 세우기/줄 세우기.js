const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const [N, M] = inputs[0].split(" ").map(Number);
  const array = inputs.slice(1).map(value => value.split(" ").map(Number));

  solution(N, M , array);
})

function solution(N, M, array) {
  const indegree = new Array(N + 1).fill(0);
  const list = {};

  for(let i=1 ; i<=N ; i++) list[i] = [];
  for(const [start, arrive] of array) {
    list[start].push(arrive);
    indegree[arrive]++;
  }
  
  topologySort(list, indegree, N);
}

function topologySort(list, indegree, N) {
  const result = [];
  const queue = [];

  for(let i=1 ; i<=N ; i++) {
    if(indegree[i] === 0) {
      queue.push(i);
    }
  }

  while(queue.length) {
    const current = queue.shift();
    result.push(current);

    for(const nextNode of list[current]) {
      indegree[nextNode]--;

      if(indegree[nextNode] === 0) {
        queue.push(nextNode);
      }
    }
  }
  
  console.log(...result);
}