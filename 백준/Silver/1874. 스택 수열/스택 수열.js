const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const N = Number(inputs.shift());
    const numbers = inputs.map(Number);

    solution(N, numbers);
});

class Stack {
    constructor() {
        this.stack = [];
    }
    size() {
        return this.stack.length;
    }
    empty() {
        return this.stack.length === 0 ? true : false;
    }
    push(value) {
        this.stack.push(value);
    }
    pop() {
        if (this.empty()) {
            return null;
        }

        return this.stack.pop();
    }
    peek() {
        if (this.empty()) {
            return null;
        }

        return this.stack[this.size() - 1];
    }
}

function solution(N, numbers) {
    const stack = new Stack();
    const result = [];
    let currentNumber = 1;
    let index = 0;

    while (currentNumber <= N || stack.peek() === numbers[index]) {
        if (stack.peek() === numbers[index]) {
            stack.pop();
            result.push('-');
            index += 1;
            continue;
        }

        stack.push(currentNumber);
        result.push('+');
        currentNumber += 1;
    }

    if (!stack.empty()) {
        return console.log('NO');
    }

    return console.log(result.map(value => `${value}\n`).join(''));
}
