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
  const sortedCost = Cost.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({length : V + 1}, (_, index) => index);

  let result = 0;
  sortedCost.forEach(cost => {
    const [A, B, C] = cost;

    if(!isSycle(parent, A, B)) {
      result += C;
      union(parent, A, B);
    }
  });

  console.log(result);
}

function findParent(parent, node) {
  if(parent[node] === node) return node;
  return findParent(parent, parent[node]);
}

function union(parent, node1, node2) {
  const parent1 = findParent(parent, node1);
  const parent2 = findParent(parent, node2);

  if(parent1 < parent2) parent[parent2] = parent1;
  else parent[parent1] = parent2;
}

function isSycle(parent, node1, node2) {
  const parent1 = findParent(parent, node1);
  const parent2 = findParent(parent, node2);

  return parent1 === parent2;
}