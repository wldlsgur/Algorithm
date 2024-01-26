const inputs = [];
require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', line => {
        inputs.push(line.trim());
    })
    .on('close', () => {
        const arr = inputs.shift().split('');

        console.log(solution(arr));
        process.exit();
    });
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    push(value) {
        if (!value) {
            return;
        }
        const node = new Node(value);

        node.next = this.top;
        this.top = node;
        this.size += 1;
    }
    pop() {
        if (this.isEmpty()) {
            return;
        }

        const result = this.top.value;

        this.top = this.top.next;
        this.size -= 1;

        return result;
    }
    peek() {
        if (this.isEmpty()) {
            return;
        }

        return this.top.value;
    }
    getSize() {
        return this.size;
    }
}

function solution(arr) {
    const stack = new Stack();
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            stack.push(arr[i]);
        }

        if (arr[i] === ')') {
            stack.pop();

            // 레이저인 경우
            if (arr[i - 1] === '(') {
                result += stack.getSize();
            }
            // 쇠막대기의 끝인 경우
            else {
                result += 1;
            }
        }
    }

    return result;
}
