const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const [V, E] = inputs[0].split(" ").map(Number);
  const Cost = inputs.slice(1).map(value => value.split(" ").map(Number));

  solution(V, E, Cost);
})

function solution(V, _, Cost) {
  const sortedCost = Cost.sort((a, b) => a[2] - b[2]); // 최소 가중치 부터 연결하기 위한 오름차순 정렬
  const parent = Array.from({length : V + 1}, (_, index) => index); // 부모 노드를 담기위한 배열

  let result = 0;
  sortedCost.forEach(cost => {
    const [A, B, C] = cost;

    // 만약 A, B를 연결할때 사이클이 발생하지 않는다면
    if(!isSycle(parent, A, B)) {
      result += C; // 결과 값에 가중치를 더하고
      union(parent, A, B); // A, B를 연결한다.
    }
  });

  console.log(result);
}

// 최상위 부모노드를 찾는 함수
function findParent(parent, node) {
  if(parent[node] === node) return node;
  return findParent(parent, parent[node]);
}

// 두 노드의 최상위 노드를 찾고 연결 후 부모를 합치는 함수
function union(parent, node1, node2) {
  const parent1 = findParent(parent, node1);
  const parent2 = findParent(parent, node2);

  if(parent1 < parent2) parent[parent2] = parent1;
  else parent[parent1] = parent2;
}

// 두 노드에 대한 부모가 같다면 사이클이 발생을 확인하는 함수
function isSycle(parent, node1, node2) {
  const parent1 = findParent(parent, node1);
  const parent2 = findParent(parent, node2);

  return parent1 === parent2;
}