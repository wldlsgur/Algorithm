const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const N = Number(inputs.shift());

    solution(N);
});

class Queue {
    constructor(N) {
        this.queue = Array.from({ length: N }, (_, index) => index + 1);
        this.front = 0;
        this.rear = N;
        this.length = N;
    }
    push(value) {
        this.queue[this.rear] = value;
        this.rear += 1;
        this.length += 1;
    }
    pop() {
        const result = this.queue[this.front];

        if (result === null || result === undefined) {
            return;
        }

        delete this.queue[this.front];
        this.front += 1;
        this.length -= 1;

        return result;
    }
    size() {
        return this.length;
    }
    getFrontValue() {
        return this.queue[this.front];
    }
}

function solution(N) {
    if (N === 1) {
        return console.log(1);
    }
    const queue = new Queue(N);

    while (queue.size() > 1) {
        queue.pop();
        queue.push(queue.pop());
    }

    console.log(queue.getFrontValue());
}
