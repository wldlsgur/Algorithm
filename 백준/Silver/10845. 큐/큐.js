const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const N = Number(inputs.shift());
    const commands = inputs;

    solution(N, commands);
});

class Queue {
    constructor() {
        this.queue = [];
        this.frontIndex = 0;
        this.rearIndex = 0;
        this.length = 0;
    }

    push(value) {
        this.queue[this.rearIndex] = value;
        this.rearIndex += 1;
        this.length += 1;
    }
    pop() {
        const result = this.queue[this.frontIndex];

        if (result === null || result === undefined) {
            return -1;
        }

        delete this.queue[this.frontIndex];
        this.frontIndex += 1;
        this.length -= 1;

        return result;
    }
    size() {
        return this.length;
    }
    empty() {
        return this.length === 0 ? 1 : 0;
    }
    front() {
        const result = this.queue[this.frontIndex];

        if (result === null || result === undefined) {
            return -1;
        }
        return result;
    }
    back() {
        const result = this.queue[this.rearIndex - 1];

        if (result === null || result === undefined) {
            return -1;
        }
        return result;
    }
}

function solution(N, commands) {
    const queue = new Queue();
    const result = [];

    commands.forEach(row => {
        const [command, number] = row.split(' ');

        if (command === 'push') {
            return queue.push(number);
        }

        result.push(queue[command]());
    });

    console.log(result.map(number => `${number}\n`).join(''));
}
