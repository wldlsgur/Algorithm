const inputs = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const N = Number(inputs.shift());
    const integers = inputs.map(input => parseInt(input, 10));

    process.stdout.write(solution(N, integers));
    process.exit();
  });

class MinHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
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
  isEmpty() {
    return this.size === 0 ? true : false;
  }
  swap(index1, index2) {
    const temp = this.heap[index1];

    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
  enQueue(value) {
    if (!value) {
      return;
    }
    const { abs, number } = value;

    this.heap.push(value);
    this.size += 1;

    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (parentIndex !== 0 && this.heap[parentIndex]) {
      const { abs: pAbs, number: pNumber } = this.heap[parentIndex];

      if (abs < pAbs || (abs === pAbs && number < pNumber)) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.getParentIndex(currentIndex);
      } else {
        break;
      }
    }
  }
  deQueue() {
    if (this.isEmpty()) {
      return 0;
    }

    const result = this.heap[1];
    const lastValue = this.heap.pop();

    this.size -= 1;

    if (!this.isEmpty()) {
      this.heap[1] = lastValue;

      let currentIndex = 1;

      while (true) {
        const leftIndex = this.getLeftIndex(currentIndex);
        const rightIndex = this.getRightIndex(currentIndex);

        let smallIndex = currentIndex;

        if (
          this.heap[leftIndex] &&
          (this.heap[leftIndex].abs < this.heap[smallIndex].abs ||
            (this.heap[leftIndex].abs === this.heap[smallIndex].abs &&
              this.heap[leftIndex].number < this.heap[smallIndex].number))
        ) {
          smallIndex = leftIndex;
        }

        if (
          this.heap[rightIndex] &&
          (this.heap[rightIndex].abs < this.heap[smallIndex].abs ||
            (this.heap[rightIndex].abs === this.heap[smallIndex].abs &&
              this.heap[rightIndex].number < this.heap[smallIndex].number))
        ) {
          smallIndex = rightIndex;
        }

        if (smallIndex !== currentIndex) {
          this.swap(currentIndex, smallIndex);
          currentIndex = smallIndex;
        } else {
          break;
        }
      }
    }

    return result.number;
  }
}

function solution(N, integers) {
  const minHeap = new MinHeap();
  const result = [];

  integers.forEach(integer => {
    if (integer === 0) {
      result.push(minHeap.deQueue());
    } else {
      const value = { abs: Math.abs(integer), number: integer };

      minHeap.enQueue(value);
    }
  });

  return result.join('\n');
}
