class Heap {
  constructor() {
    this.heap = [null];
  }

  getLeftIdx(idx) {
    return idx * 2;
  }
  getRightIdx(idx) {
    return idx * 2 + 1;
  }
  getParentIdx(idx) {
    return Math.floor(idx / 2);
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  isEmpty() {
    return this.heap[1] ? false : true;
  }
  peek() {
    return this.heap[1];
  }
  size() {
    return this.heap.length - 1;
  }
}

class MinHeap extends Heap {
  constructor() {
    super();
  }

  heapifyUp() {
    let currentIdx = this.heap.length - 1;
    let parentIdx = this.getParentIdx(currentIdx);

    while (parentIdx > 0 && this.heap[parentIdx] > this.heap[currentIdx]) {
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = this.getParentIdx(currentIdx);
    }
  }
  heapifyDown() {
    let currentIdx = 1;

    while (true) {
      const leftIdx = this.getLeftIdx(currentIdx);
      const rightIdx = this.getRightIdx(currentIdx);
      let smallerChildIdx = leftIdx;

      if (
        this.heap[rightIdx] !== undefined &&
        this.heap[rightIdx] < this.heap[leftIdx]
      ) {
        smallerChildIdx = rightIdx;
      }

      if (
        this.heap[smallerChildIdx] !== undefined &&
        this.heap[smallerChildIdx] < this.heap[currentIdx]
      ) {
        this.swap(currentIdx, smallerChildIdx);
        currentIdx = smallerChildIdx;
      } else {
        break;
      }
    }
  }
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const result = this.heap[1];
    const lastValue = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[1] = lastValue;
      this.heapifyDown();
    }

    return result;
  }
}
