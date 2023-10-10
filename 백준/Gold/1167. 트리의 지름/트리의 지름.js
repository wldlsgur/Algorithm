const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

class Queue {
    constructor() {
        this.queue = []
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.queue[this.rear++] = value;
    }

    dequeue() {
        const value = this.queue[this.front];
        
        delete this.queue[this.front];
        this.front += 1;

        return value;
    }

    peek() {
        return this.queue[this.front];
    }

    size() {
        return this.rear - this.front;
    }
}

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const V = Number(inputs.shift());
    const G = inputs.map(value => value.split(" ").map(Number));

    solution(V, G)
})

function solution(V, G) {
    const list = {};

    for(let i=1 ; i<=V ; i++) {
        list[i] = [];
    }

    for(const row of G) {
        const start = row.shift();

        for(let i=0 ; i<row.length ; i+=2) {
            if(row[i] === -1) {
                break;
            }

            const arrive = row[i];
            const cost = row[i + 1];

            list[start].push([arrive, cost]);
        }
    }
    
    const { node: maxNode } = bfs(list, V, 1);
    const { cost: maxCost } = bfs(list, V, maxNode);

    console.log(maxCost);
}

function bfs(list, V, start) {
    const queue = new Queue();
    const visited = new Array(V + 1).fill(false);
    const max = { node : 0, cost : 0 };

    queue.enqueue([start, 0]);
    visited[start] = true;

    while(queue.size() > 0) {
        const [node, cost] = queue.dequeue();

        if(max.cost < cost) {
            max.node = node;
            max.cost = cost;
        }
    
        for(const [nextNode, nextCost] of list[node]) {
            if(!visited[nextNode]) {
                visited[nextNode] = true;
                queue.enqueue([nextNode, cost + nextCost]);
            }
        }
    }   

    return max;
}
