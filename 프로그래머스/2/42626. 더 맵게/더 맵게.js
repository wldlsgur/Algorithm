class MinHeap {
  constructor() {
    this.heap = [null];
  }
  getValue(index) {
    return this.heap[index];
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
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
  size() {
    return this.heap.length - 1;
  }
  isEmpty() {
    return this.heap[1] ? false : true;
  }
  peek() {
    return this.heap[1];
  }
  heapUp() {
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (
      parentIndex > 0 &&
      this.getValue(parentIndex) > this.getValue(currentIndex)
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }
  heapDown() {
    let currentIndex = 1;

    while (true) {
      const leftIndex = this.getLeftIndex(currentIndex);
      const rightIndex = this.getRightIndex(currentIndex);
      let smallerChildIndex = leftIndex;

      if (
        this.getValue(rightIndex) &&
        this.getValue(leftIndex) > this.getValue(rightIndex)
      ) {
        smallerChildIndex = rightIndex;
      }

      if (this.getValue(smallerChildIndex) < this.getValue(currentIndex)) {
        this.swap(currentIndex, smallerChildIndex);
        currentIndex = smallerChildIndex;
      } else {
        break;
      }
    }
  }
  size() {
    return this.heap.length - 1;
  }
  push(value) {
    if (!value) {
      return;
    }
    this.heap.push(value);
    this.heapUp();
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const result = this.peek();
    const lastValue = this.heap.pop();

    this.heap[1] = lastValue;
    this.heapDown();

    return result;
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();
  let result = 0;

  scoville.forEach((value) => minHeap.push(value));

  while (minHeap.peek() && minHeap.peek() < K) {
    const food1 = minHeap.pop();
    const food2 = minHeap.pop();

    if (!food2) {
      return -1;
    }

    const newValue = food1 + food2 * 2;

    result += 1;
    minHeap.push(newValue);
  }

  return result;
}