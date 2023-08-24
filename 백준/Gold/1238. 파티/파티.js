const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const [N, M ,X] = inputs.shift().split(" ").map(Number);
    const info = inputs.map(value => value.split(" ").map(Number));

    solution(N, M, X, info);
})

function solution(N, M, X, info) {
    const listToX = {};
    const listToN = {};

    for(let i=1 ; i<=N ; i++) {
        listToX[i] = [];
        listToN[i] = [];
    }

    for(const [start, arrvie, distance] of info) {
        listToX[start].push([arrvie, distance]);
        listToN[arrvie].push([start, distance]);
    }

    const resultToX = dijkstra(N, M, X, listToX);
    const resultToN = dijkstra(N, M, X, listToN)
    const result = new Array(N + 1).fill(0);

    for(let i=1; i<=N ; i++) {
        result[i] = resultToX[i] + resultToN[i];
    }
    
    console.log(Math.max(...result));
}   

function dijkstra(N, M, start, list) {
    const distanceArr = new Array(N + 1).fill(Infinity);
    const visited = new Array(N + 1).fill(false);
    const minHeap = new MinHeap();    

    minHeap.insert(start, 0);
    distanceArr[start] = 0;

    while(!minHeap.isEmpty()) {
        const [node, distance] = minHeap.delete();

        if(visited[node]) {
            continue;
        }

        visited[node] = true;

        for(const [newNode, newDistance] of list[node]) {
            if(distanceArr[newNode] > distanceArr[node] + newDistance) {
                distanceArr[newNode] = distanceArr[node] + newDistance;
                minHeap.insert(newNode, distanceArr[newNode]);
            }
        }
    }
    return distanceArr;
}

class MinHeap {
    constructor() {
        this.heap = [[null, null]];
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
        return this.heap.length === 1;
    }

    swapNode(parentIndex, childIndex) {
        let temp = this.heap[parentIndex];
        
        this.heap[parentIndex] = this.heap[childIndex];
        this.heap[childIndex] = temp;
    }

    insert(node, distance) {
        if(!node || distance < 0) return;

        this.heap.push([node, distance]); // 힙 마지막에 노드 삽입

        let currentIdx = this.heap.length - 1; // 현재 인덱스 타겟 마지막 인덱스

        // 부모 노드가 더 크거나 힙에 노드가 2개 이상일때 반복
        while(currentIdx > 1 && this.heap[this.getParentIndex(currentIdx)][1] > this.heap[currentIdx][1]) { 
            this.swapNode(this.getParentIndex(currentIdx), currentIdx); // 부모 노드와 자식 노드 변경

            currentIdx = this.getParentIndex(currentIdx);
        }  
    }

    delete() {
        if(this.isEmpty()) return; // 힙이 비어있으면 바로 종료
        if(this.heap.length === 2) return this.heap.pop(); // 힙의 개수가 1개이면 루트 노드 바로 반환

        const deleteResult = this.heap[1]; // 루트 노드 가져오고
        this.heap[1] = this.heap.pop(); // 마지막 노드 빼서 루트 노드로 이동

        let currentIdx = 1;

        while(true) {
            const leftChildIdx = this.getLeftChildIndex(currentIdx);
            const rightChildIdx = this.getRightChildIndex(currentIdx);

            let smallIdx;

            if(leftChildIdx >= this.heap.length) break; // 왼쪽 자식이 없으면 오른쪽 자식도 없기에 바로 종료

            if(rightChildIdx < this.heap.length) { // 오른쪽 자식 까지 있으면 비교
                smallIdx = this.heap[leftChildIdx][1] < this.heap[rightChildIdx][1] ? leftChildIdx : rightChildIdx;
            } 
            else { // 왼쪽 자식만 있는 경우 작은 값은 반드시 왼쪽
                smallIdx = leftChildIdx;
            }

            if(this.heap[currentIdx][1] > this.heap[smallIdx][1]) { // 루트 노드와 작은 값의 자식 노드를 비교
                this.swapNode(currentIdx, smallIdx);
                currentIdx = smallIdx;
            }
            else { // 루트가 더 작으면 종료
                break;
            }
        }

        return deleteResult;
    }
}