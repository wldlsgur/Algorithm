const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const testCase = parseInt(inputs.shift(), 10);
    const rows = inputs;

    solution(testCase, rows);
});

class Stack {
    constructor() {
        this.stack = [];
    }

    empty() {
        return this.stack.length === 0 ? 1 : 0;
    }
    size() {
        return this.stack.length;
    }
    top() {
        if (this.empty()) {
            return -1;
        }
        return this.stack[this.stack.length - 1];
    }
    push(value) {
        this.stack.push(value);
    }
    pop() {
        if (this.empty()) {
            return -1;
        }
        return this.stack.pop();
    }
}

function solution(testCase, rows) {
    const stack = new Stack();
    const result = [];

    rows.forEach(row => {
        const [method, number] = row.split(' ');

        if (method === 'push') {
            stack.push(number);
        } else {
            result.push(stack[method]());
        }
    });

    console.log(
        result
            .map(value => {
                return `${String(value)}\n`;
            })
            .slice(0, result.length)
            .join('')
    );
}
