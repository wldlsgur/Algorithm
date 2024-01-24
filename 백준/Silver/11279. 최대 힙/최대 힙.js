const inputs = [];
require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', line => {
        inputs.push(line.trim());
    })
    .on('close', () => {
        const n = parseInt(inputs.shift(), 10);
        const integers = inputs.map(Number);

        console.log(solution(n, integers));
        process.exit();
    });

class MaxHeap {
    constructor() {
        this.heap = [null];
    }
    getLeftChildIndex(index) {
        return index * 2;
    }
    getRightChildIndex(index) {
        return index * 2 + 1;
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
        return this.heap.length === 1;
    }
    push(value) {
        if (!value) {
            return;
        }

        this.heap.push(value);

        let currentIndex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(currentIndex);

        while (parentIndex > 0 && this.heap[parentIndex] < value) {
            this.swap(currentIndex, parentIndex);

            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }
    pop() {
        if (this.isEmpty()) {
            return 0;
        }
        const result = this.heap[1];
        const lastValue = this.heap.pop();

        if (!this.isEmpty()) {
            this.heap[1] = lastValue;

            let currentIndex = 1;

            while (true) {
                const leftIndex = this.getLeftChildIndex(currentIndex);
                const rightIndex = this.getRightChildIndex(currentIndex);
                let biggerChildIndex = leftIndex;

                // 왼쪽, 오른쪽 누가 더 큰지
                if (
                    this.heap[rightIndex] !== undefined &&
                    this.heap[rightIndex] > this.heap[leftIndex]
                ) {
                    biggerChildIndex = rightIndex;
                }

                // 더 큰 값을 기준으로 현재 노드랑 큰 값 비교
                if (
                    this.heap[biggerChildIndex] !== undefined &&
                    this.heap[biggerChildIndex] > this.heap[currentIndex]
                ) {
                    this.swap(currentIndex, biggerChildIndex);
                    currentIndex = biggerChildIndex;
                } else {
                    break;
                }
            }
        }

        return result;
    }
}

function solution(n, integers) {
    const maxHeap = new MaxHeap();
    const result = [];

    integers.forEach(integer => {
        if (integer === 0) {
            result.push(maxHeap.pop());
        }
        maxHeap.push(integer);
    });

    return result.join('\n');
}
