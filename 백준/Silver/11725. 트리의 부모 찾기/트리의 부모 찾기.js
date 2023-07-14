const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line" , (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const N = Number(inputs[0]);
  const connection = inputs.slice(1, inputs.length).map((line, hIndex) => {
    return line.split(" ").map(Number);
  });

  solution(N, connection);
})

function solution(N, connection) {
  const parentNode = Array.from({length : N + 1}, () => 0); // 각 노드 번호마다 부모노드를 저장함
  const list = Array.from({ length: N + 1 }, () => []);
  let result = "";

  // 리스트 연결 정보 삽입
  connection.forEach(([start, arrive]) => {
    list[start].push(arrive);
    list[arrive].push(start);
  });

  bfs(1, list, parentNode, N);

  // 배열 0, 1 인덱스는 제외하며 출력
  parentNode.slice(2, parentNode.length).map((value) => result += value + "\n");
  console.log(result);
}

function bfs(start, list, parentNode, N) {
  const visited = Array.from({ length: N + 1 }, () => false);
  const queue = [];
  let queueIndex = 0;

  queue.push(start);
  visited[start] = true;

  // 1번 노드를 시작점을 기점으로 연결된 노드는 1번 노드를 부모로 가진다. 이 로직을 반복
  while (queue[queueIndex]) {
    const startNode = queue[queueIndex++];

    list[startNode].forEach((arriveNode) => {
      if (!visited[arriveNode]) {
        visited[arriveNode] = true;
        queue.push(arriveNode);
        parentNode[arriveNode] = startNode;
      }
    });
  }
}