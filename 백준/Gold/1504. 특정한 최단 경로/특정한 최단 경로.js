const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const [N, E] = inputs.shift().split(" ").map(Number);
    const info = inputs.map(value => value.split(" ").map(Number));
    const [v1, v2] = info.pop();

    solution(N, E, info, v1, v2);
});

function solution(N, E, info, v1, v2) {
    const list = {};

    for(let i=1 ; i<=N ; i++) {
        list[i] = [];
    }

    for(const [start, arrive, cost] of info) {
        list[start].push([arrive, cost]);
        list[arrive].push([start, cost]);
    }

    const [a, b] = dijstra(N, list, 1, v1, v2);
    const [c, d] = dijstra(N, list, v1, v2, N);
    const [e, f] = dijstra(N, list, v2, N, v1);

    const case1 = a + c + e;
    const case2 = b + d + f;

    if(case1 === Infinity && case2 === Infinity) {
        return console.log(-1);
    }

    return console.log(Math.min(case1, case2));
}

function dijstra(N, list, startNode, v1, v2) {
    const minHeap = new MinHeap();
    const distance = new Array(N + 1).fill(Infinity);
    const visited = new Array(N + 1).fill(false);

    minHeap.insert([startNode, 0])
    distance[startNode] = 0;

    while(!minHeap.isEmpty()) {
        const [node, cost] = minHeap.getMinWeight();

        if(visited[node]) {
            continue;
        }
        visited[node] = true;

        for(const [newNode, newCost] of list[node]) {
            if(distance[newNode] > distance[node] + newCost) {
                distance[newNode] = distance[node] + newCost;
                minHeap.insert([newNode, distance[newNode]]);
            }
        }
    }

    return [distance[v1], distance[v2]];
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
    
        while (currentIndex > 1 && this.heap[currentIndex][1] < this.heap[this.getParentIndex(currentIndex)][1]) {
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