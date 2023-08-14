const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const N = Number(inputs[0]);
  const M = Number(inputs[1]);
  const busInfo = inputs.splice(2, inputs.length - 3).map(value => value.split(" ").map(Number));
  const [startPoint, arrivePoint] = inputs.slice(2)[0].split(" ").map(Number);

  solution(N, M, busInfo, startPoint, arrivePoint);
})

function solution(N, M, busInfo, startPoint, arrivePoint) {
  const distance = new Array(N + 1).fill(Infinity); // 최소 거리 배열
  const list = {};

  //리스트 초기화
  for(let i=1 ; i<=N ; i++) {
    list[i] = [];
  }
  // 리스트 초기화
  for(const [start, arrive, cost] of busInfo) {
    list[start].push([arrive, cost]);
  }

  dijkstra(N, distance, list, startPoint);
  console.log(distance[arrivePoint]);
}
// 다익스트라 알고리즘 함수
function dijkstra(N, distance, list, startPoint) {
  const minHeap = new MinHeap(); // 최소 힙
  const visited = new Array(N + 1).fill(false); // 방문 여부 확인 배열

  distance[startPoint] = 0; // 시작 노드는 자기 자신 거리 0
  minHeap.insert([startPoint, 0]); // 최소 힙에 시작 노드, 거리 0 넣기

  // 최소 힙이 빌때까지 반복
  while(!minHeap.isEmpty()) {
    const [node, weight] = minHeap.getMinWeight(); // 최소 힙을 통해 최소 가중치를 가져온다. [정점, 가중치]

    if(visited[node]) continue; // 만약 방문한 노드라면 생략

    visited[node] = true; // 노드 방문 처리

    for(const [arrive, cost] of list[node]) {
      // 연결된 노드의 현재 최소거리보다 더 작다면 갱신해주며 최소 힙에 넣기
      if(distance[arrive] > distance[node] + cost) {
        distance[arrive] = distance[node] + cost;
        minHeap.insert([arrive, distance[arrive]]);
      }
    }
  }


}

class MinHeap {
  heap = [];

  constructor() {
    this.heap.push([null]);
  }

  getParentIndex(index) {
    return Math.floor(index / 2);
  }
  getLeftChildIndex(index) {
    return index * 2;
  }
  getRightChildIndex(index) {
    return index * 2 + 1;
  }

  isEmpty() {
    return this.heap[1] ? false : true;
  }

  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  insert(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;

    while (
      currentIndex > 1 &&
      this.heap[currentIndex][1] <
        this.heap[this.getParentIndex(currentIndex)][1]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  getMinWeight() {
    if (this.isEmpty()) return [null, null];

    const [vertex, weight] = this.heap[1];

    if (this.heap.length === 2) {
      this.heap.pop();
      return [vertex, weight];
    }

    this.heap[1] = this.heap.pop();
    let currentIndex = 1;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      let smallerChildIndex;

      if (leftChildIndex >= this.heap.length) break;

      if (rightChildIndex < this.heap.length) {
        smallerChildIndex =
          this.heap[leftChildIndex][1] < this.heap[rightChildIndex][1]
            ? leftChildIndex
            : rightChildIndex;
      } else {
        smallerChildIndex = leftChildIndex;
      }

      if (this.heap[currentIndex][1] <= this.heap[smallerChildIndex][1]) break;

      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex;
    }
    return [vertex, weight];
  }
}