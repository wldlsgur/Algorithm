const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const N = Number(inputs.shift());
    const commands = inputs;

    solution(N, commands);
});

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    size() {
        return this.length;
    }
    empty() {
        if (this.head === null && this.tail === null) {
            return 1;
        }
        return 0;
    }
    push_front(value) {
        const newNode = new Node(value);

        if (this.empty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length += 1;
    }
    push_back(value) {
        const newNode = new Node(value);

        if (this.empty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length += 1;
    }
    pop_front() {
        if (this.empty()) {
            return -1;
        }
        const result = this.head.value;

        if (this.size() === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head.next.prev = null;
            this.head = this.head.next;
        }
        this.length -= 1;

        return result;
    }
    pop_back() {
        if (this.empty()) {
            return -1;
        }
        const result = this.tail.value;

        if (this.size() === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        }

        this.length -= 1;

        return result;
    }
    front() {
        return this.empty() ? -1 : this.head.value;
    }
    back() {
        return this.empty() ? -1 : this.tail.value;
    }
}

function solution(N, commands) {
    const deque = new Deque();
    const result = [];

    commands.forEach(row => {
        const [command, number] = row.split(' ');

        if (number) {
            deque[command](number);
        } else {
            result.push(deque[command]());
        }
    });

    console.log(result.map(value => `${value}\n`).join(''));
}
