const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const [N, M] = inputs.shift().split(' ').map(Number);
    const calculations = inputs.map(value => value.split(' ').map(Number));

    process.stdout.write(solution(N, M, calculations));
    process.exit();
  });

function solution(N, M, calculations) {
  const arr = Array.from({ length: N + 1 }, (_, i) => i);
  const result = [];

  calculations.forEach(([calculation, a, b]) => {
    if (calculation === 0) {
      union(arr, a, b);
    }

    if (calculation === 1) {
      isCycle(arr, a, b) ? result.push('YES') : result.push('NO');
    }
  });

  return result.join('\n');
}

function findParent(parent, node) {
  if (parent[node] !== node) {
    parent[node] = findParent(parent, parent[node]);
  }

  return parent[node];
}

function union(parent, node1, node2) {
  const parent1 = findParent(parent, node1);
  const parent2 = findParent(parent, node2);

  if (parent1 < parent2) {
    return (parent[parent2] = parent1);
  }

  parent[parent1] = parent2;
}

function isCycle(parent, node1, node2) {
  const parent1 = findParent(parent, node1);
  const parent2 = findParent(parent, node2);

  return parent1 === parent2;
}
