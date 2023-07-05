const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const [V, E] = inputs[0].split(" ").map(Number);
    const start = Number(inputs[1]);
    const graphInfo = inputs.slice(2, inputs.length).map(value => value.split(" ").map(Number));

    solution(V, E, start, graphInfo);
});

function solution(V, E, start, graphInfo) {
    const list = createList(V);

    for(const uvw of graphInfo){
        const [u, v, w] = uvw; // u : 시작점, v : 도착점, w : 가중치
        
        list[u].push([v, w]);
    }
    
    const distance = dijkstra(list, start, V);

    distance.slice(1).map(value => value === Infinity ? console.log("INF") : console.log(value));
}

function dijkstra(list, start, V) {
    const priorityQueue = new MinHeap();
    const visited = Array.from({ length: V + 1 }, () => false);
    const distance = Array.from({ length: V + 1 }, () => Infinity);

    distance[start] = 0; // 자기 자신 거리 0
    priorityQueue.insert([start, 0]);

    while(!priorityQueue.isEmpty()){
        const [vertex, weight] = priorityQueue.getMinWeight();

        if (visited[vertex] || !vertex) continue;
        else visited[vertex] = true;

        for(let i=0 ; i<list[vertex].length ; i++) {
            const [arrive, weight] = list[vertex][i];

            if(distance[arrive] > distance[vertex] + weight) {
              distance[arrive] = distance[vertex] + weight;
              priorityQueue.insert([arrive, distance[arrive]]);
            }
        }
    }
    return distance;
}

function createList(V) {
    const list = {};

    for(let i=1 ; i<=V ; i++) list[i] = [];

    return list;
}

class MinHeap {
    heap = [];

    constructor() { this.heap.push([null]); }

    getParentIndex(index) { return Math.floor(index / 2); }
    getLeftChildIndex(index) { return index * 2; }
    getRightChildIndex(index) { return index * 2 + 1; }

    isEmpty() { return this.heap[1] ? false : true; }

    swap(index1, index2) {
      let temp = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = temp;
    }

    insert(value) {
      this.heap.push(value);

      let currentIndex = this.heap.length - 1;

      while (currentIndex > 1 && this.heap[currentIndex][1] < this.heap[this.getParentIndex(currentIndex)][1]) {
        this.swap(currentIndex, this.getParentIndex(currentIndex));
        currentIndex = this.getParentIndex(currentIndex);
      }
    }

  getMinWeight() {
      if (this.isEmpty()) return [null, null];

      const [vertex, weight] = this.heap[1];
      let currentIndex = 1;

      this.heap[1] = this.heap.pop();
      if (this.heap.length === 2) {
        this.heap.pop();
        return [vertex, weight];
      }
      while (true) {
        const leftChildIndex = this.getLeftChildIndex(currentIndex);
        
        if (leftChildIndex >= this.heap.length) break;

        const rightChildIndex = this.getRightChildIndex(currentIndex);
        let smallerChildIndex;

        if (rightChildIndex < this.heap.length) {
          smallerChildIndex = this.heap[leftChildIndex][1] < this.heap[rightChildIndex][1] ? leftChildIndex : rightChildIndex;
        } 
        else {
          smallerChildIndex = leftChildIndex;
        }

        if (this.heap[currentIndex][1] <= this.heap[smallerChildIndex][1]) break;

        this.swap(currentIndex, smallerChildIndex);
        currentIndex = smallerChildIndex;
      }
      return [vertex, weight];
    }
}