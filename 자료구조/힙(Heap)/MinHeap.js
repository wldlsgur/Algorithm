class MinHeap {
    heap = [];

    constructor() {
        this.heap.push(null); // 편한 인덱스 계산을 위해 0번째 null 삽입
    }

    getParentIndex(index) {
        return Math.floor(index / 2); // 부모 인덱스 계산
    }

    getLeftChildIndex(index) {
        return index * 2; // 왼쪽 자식 인덱스 계산
    }

    getRightChildIndex(index) {
        return index * 2 + 1; // 오른쪽 자식 인덱스 계산
    }

    isEmpty() {
        return this.heap.length === 1; // 힙이 비었는지 확인
    }

    printHeap() {
        console.log(this.heap);
    }

    swapNode(parentIndex, childIndex) {
        let temp = this.heap[parentIndex];
        
        this.heap[parentIndex] = this.heap[childIndex];
        this.heap[childIndex] = temp;
    }

    insertNode(node) {
        if(!node) return;

        this.heap.push(node); // 힙 마지막에 노드 삽입

        let currentIdx = this.heap.length - 1; // 현재 인덱스 타겟 마지막 인덱스

        // 부모 노드가 더 크거나 힙에 노드가 2개 이상일때 반복
        while(currentIdx > 1 && this.heap[this.getParentIndex(currentIdx)] > this.heap[currentIdx]) { 
            this.swapNode(this.getParentIndex(currentIdx), currentIdx); // 부모 노드와 자식 노드 변경

            currentIdx = this.getParentIndex(currentIdx);
        }  
    }

    deleteNode() {
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
                smallIdx = this.heap[leftChildIdx] < this.heap[rightChildIdx] ? leftChildIdx : rightChildIdx;
            } 
            else { // 왼쪽 자식만 있는 경우 작은 값은 반드시 왼쪽
                smallIdx = leftChildIdx;
            }

            if(this.heap[currentIdx] > this.heap[smallIdx]) { // 루트 노드와 작은 값의 자식 노드를 비교
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

const minHeap = new MinHeap();

minHeap.insertNode(4);
minHeap.insertNode(5);
minHeap.insertNode(6);
minHeap.insertNode(2);
minHeap.insertNode(3);
minHeap.insertNode(1);
minHeap.insertNode(7);

minHeap.printHeap();

console.log(minHeap.deleteNode());
console.log(minHeap.deleteNode());
console.log(minHeap.deleteNode());
console.log(minHeap.deleteNode());
console.log(minHeap.deleteNode());
console.log(minHeap.deleteNode());
console.log(minHeap.deleteNode());