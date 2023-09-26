class Queue {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }

    enqueue(value) {
        if(this.isFull()) {
            return console.log("Queue is full.");
        }

        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.maxSize;
        this.size += 1;
    }

    dequeue() {
        const value = this.queue[this.front];

        delete this.queue[this.front];
        this.front = (this.front + 1) % this.maxSize;
        this.size -= 1;

        return value;
    }

    isFull() {
        return this.size === this.maxSize;
    }

    peek() {
        return this.queue[this.front];
    }
}

const queue = new Queue(4);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
queue.enqueue(16); // Queue is full.
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.size); // 2
console.log(queue.peek()); // 4
queue.enqueue(16);
queue.enqueue(12);
console.log(queue.isFull()); // true;