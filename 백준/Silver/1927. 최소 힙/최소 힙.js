const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const n = Number(inputs.shift());
    const numbers = inputs.map(Number);

    solution(n, numbers);
});

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    isEmpty() {
        return this.heap[1] ? false : true;
    }

    swap(index1, index2) {
        const temp = this.heap[index1];

        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
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

    push(value) {
        this.heap.push(value);

        let currentIndex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(currentIndex);

        while (parentIndex !== 0 && this.heap[parentIndex] > value) {
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

                let smallerChildIndex = leftIndex;

                if (
                    this.heap[rightIndex] !== undefined &&
                    this.heap[rightIndex] < this.heap[leftIndex]
                ) {
                    smallerChildIndex = rightIndex;
                }

                if (
                    this.heap[smallerChildIndex] !== undefined &&
                    this.heap[smallerChildIndex] < this.heap[currentIndex]
                ) {
                    this.swap(currentIndex, smallerChildIndex);
                    currentIndex = smallerChildIndex;
                } else {
                    break;
                }
            }
        }

        return result;
    }
}

function solution(n, numbers) {
    const minHeap = new MinHeap();
    const result = [];

    numbers.forEach(number => {
        if (number === 0) {
            return result.push(minHeap.pop());
        }

        minHeap.push(number);
    });

    console.log(result.join('\n'));
}
