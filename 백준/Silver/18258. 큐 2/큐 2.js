const inputs = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const N = Number(inputs.shift());
    const commands = inputs;

    console.log(solution(N, commands));
    process.exit();
  });

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  getFrontValue() {
    return this.isEmpty() ? -1 : this.front.value;
  }
  getRearValue() {
    return this.isEmpty() ? -1 : this.rear.value;
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.rear === null && this.front === null ? 1 : 0;
  }
  enQueue(newValue) {
    if (!newValue) {
      return;
    }

    const newNode = new Node(newValue);

    this.size += 1;

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      return;
    }

    this.front.right = newNode;
    this.front = newNode;
  }
  deQueue() {
    if (this.isEmpty()) {
      return -1;
    }

    const resultValue = this.getRearValue();

    this.size -= 1;
    this.rear = this.rear.right;

    if (this.rear === null) {
      this.front = null;
    }

    return resultValue;
  }
}

function solution(N, commands) {
  const queue = new Queue();
  const result = [];

  commands.forEach(command => {
    const [method, value] = command.split(' ');

    if (method === 'push' && value) {
      queue.enQueue(value);
    }

    if (method === 'pop') {
      result.push(queue.deQueue());
    }

    if (method === 'size') {
      result.push(queue.getSize());
    }

    if (method === 'empty') {
      result.push(queue.isEmpty());
    }

    if (method === 'front') {
      result.push(queue.getRearValue());
    }

    if (method === 'back') {
      result.push(queue.getFrontValue());
    }
  });

  return result.join('\n');
}
