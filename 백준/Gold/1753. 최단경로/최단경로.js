const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const [v, e] = inputs.shift().split(' ').map(Number);
    const k = Number(inputs.shift());
    const g = inputs.map(value => value.split(' ').map(Number));

    console.log(solution(v, e, k, g));
    process.exit();
  });

function solution(v, e, k, g) {
  const graph = {};

  for (let i = 1; i <= v; i += 1) {
    graph[i] = [];
  }

  for (const [u, v, w] of g) {
    graph[u].push([v, w]);
  }

  const result = dijkstra(graph, v, e, k);

  return result
    .slice(1)
    .map(value => (value === Infinity ? 'INF' : value))
    .join('\n');
}

function dijkstra(graph, v, e, k) {
  const minHeap = new MinHeap();
  const visited = Array.from({ length: v + 1 }, () => false);
  const distance = Array.from({ length: v + 1 }, () => Infinity);

  distance[k] = 0;
  minHeap.push([k, 0]);

  while (!minHeap.isEmpty()) {
    const [node] = minHeap.pop();

    if (visited[node]) {
      continue;
    }

    visited[node] = true;

    for (const [arrive, weight] of graph[node]) {
      if (distance[arrive] > distance[node] + weight) {
        distance[arrive] = distance[node] + weight;
        minHeap.push([arrive, distance[arrive]]);
      }
    }
  }

  return distance;
}

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getLeftIndex(index) {
    return index * 2;
  }
  getRightIndex(index) {
    return index * 2 + 1;
  }
  getParentIndex(index) {
    return Math.floor(index / 2);
  }
  swap(index1, index2) {
    return ([this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ]);
  }
  isEmpty() {
    return this.heap.length === 1;
  }
  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (
      parentIndex > 0 &&
      this.heap[parentIndex][1] > this.heap[currentIndex][1]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const resultValue = this.heap[1];
    const lastValue = this.heap.pop();
    let currentIndex = 1;

    if (this.isEmpty()) {
      return resultValue;
    }

    this.heap[1] = lastValue;

    while (true) {
      const leftIndex = this.getLeftIndex(currentIndex);
      const rightIndex = this.getRightIndex(currentIndex);
      let smallerIndex = leftIndex;

      if (
        this.heap[rightIndex] !== undefined &&
        this.heap[rightIndex][1] < this.heap[leftIndex][1]
      ) {
        smallerIndex = rightIndex;
      }

      if (
        this.heap[smallerIndex] !== undefined &&
        this.heap[currentIndex][1] > this.heap[smallerIndex][1]
      ) {
        this.swap(currentIndex, smallerIndex);
        currentIndex = smallerIndex;
      } else {
        break;
      }
    }

    return resultValue;
  }
}
