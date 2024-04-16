const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const N = Number(inputs.shift());
    const M = Number(inputs.shift());
    const G = inputs.splice(0, N).map(value => value.split(' ').map(Number));
    const plan = inputs.shift().split(' ').map(Number);

    console.log(solution(N, M, G, plan));
    process.exit();
  });

function solution(N, M, G, plan) {
  const set = Array.from({ length: N }, (_, index) => index);

  G.forEach((row, i) => {
    row.forEach((isConnected, j) => {
      if (isConnected === 1) {
        union(set, i, j);
      }
    });
  });

  for (let i = 1; i < M; i += 1) {
    if (!isCycle(set, plan[i - 1] - 1, plan[i] - 1)) {
      return 'NO';
    }
  }

  return 'YES';
}

function union(set, node1, node2) {
  const p1 = find(set, node1);
  const p2 = find(set, node2);

  p1 < p2 ? (set[p2] = p1) : (set[p1] = p2);
}

function find(set, node) {
  if (set[node] !== node) {
    set[node] = find(set, set[node]);
  }

  return set[node];
}

function isCycle(set, node1, node2) {
  const p1 = find(set, node1);
  const p2 = find(set, node2);

  return p1 === p2;
}
