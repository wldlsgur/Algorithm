const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const [N, M, V] = inputs.shift().split(" ").map(Number);
    const G = inputs.map(value => value.trim().split(" ").map(Number));

    solution(N, M, V, G);
})

function solution(N, M, V, G) {
    const list = {};
    const visited = new Array(N + 1).fill(false);
    const result = [[], []];

    for(let i=1; i<=N ; i++) {
        list[i] = [];
    }

    for(const [start, arrive] of G) {
        list[start].push(arrive);
        list[arrive].push(start);
    }

    for(let i=1; i<=N ; i++) {
        list[i].sort((a, b) => a - b);
    }

    dfs(list, visited, N, V, result);
    bfs(list, N, V, result);

    result.map(row => console.log(row.join(" ")));
}

function dfs(list, visited, N, start, result) {
    result[0].push(start);
    visited[start] = true;

    for(const nextNode of list[start]) {
        if(!visited[nextNode]) {
            dfs(list, visited, N, nextNode, result);
        }
    }
}

function bfs(list, N, start, result) {
    const queue = [start]
    const visited = new Array(N + 1).fill(false);

    visited[start] = true;

    while(queue.length > 0) {
        const currNode = queue.shift();

        result[1].push(currNode);

        for(const nextNode of list[currNode]) {
            if(!visited[nextNode]) {
                visited[nextNode] = true;
                queue.push(nextNode);
            }
        }
    }
}