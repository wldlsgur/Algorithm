class MinHeap {
    constructor() {
        this.heap = [null];
    }

    getLeftChildIndex(index) {
        return index * 2;
    }

    getRightChildIndex(index) {
        return (index * 2) + 1;
    }

    getParentIndex(index) {
        return Math.floor(index / 2);
    }
    
    swap(index1, index2) {
        const temp = this.heap[index1];

        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    isEmpty() {
        return !this.heap[1] ? true : false;
    }

    push(value) {
        if(!value) {
            return;
        }
        this.heap.push(value);

        let currentIndex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(currentIndex);
        
        while(parentIndex !== 0 && this.heap[parentIndex] > value) {
            this.swap(currentIndex, parentIndex);

            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }

    pop() {
        const result = this.heap[1];
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;

        if(this.heap.length === 2) {
            return this.heap.pop();
        }

        this.heap[1] = this.heap.pop();

        while(this.heap[currentIndex] > this.heap[leftIndex] || this.heap[currentIndex] > this.heap[rightIndex]) {
            if(this.heap[leftIndex] < this.heap[rightIndex]) {
                this.swap(currentIndex, leftIndex);
                currentIndex = leftIndex;
            }
            else {
                this.swap(currentIndex, rightIndex);
                currentIndex = rightIndex;
            }
            leftIndex = this.getLeftChildIndex(currentIndex);
            rightIndex = this.getRightChildIndex(currentIndex);
        }

        return result;
    }
}

const minHeap = new MinHeap();

minHeap.push(5);
minHeap.push(1);
// minHeap.push(2);

console.log(minHeap.heap);
console.log(minHeap.pop());
console.log(minHeap.heap);
