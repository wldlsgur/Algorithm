const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', (input) => {
    inputs.push(input);
}).on('close', () => {
    const [N, M] = inputs[0].split(' ').map(Number);
    const G = inputs.slice(1, inputs.length).map((value) => {
        return value.split(' ').map(Number);
    });

    solution(N, M, G);
});

function solution(N, M, G) {
    // N : 정점 개수 , M : 간선 개수
    const list = createList(N);
    const visited = new Array(N + 1);
    let result = 0;

    for (let i = 0; i < M; i++) {
        const start = G[i][0];
        const arrive = G[i][1];

        insertList(list, start, arrive);
    }

    for (const vertex in list) {
        if (!visited[vertex]) {
            result += 1;
            bfs(list, vertex, visited);
        }
    }

    console.log(result);
}

function bfs(list, start, visited) {
    const queue = [start];

    visited[start] = true;

    while (queue.length > 0) {
        const vertex = queue.shift();

        for (let i = 0; i < list[vertex].length; i++) {
            const arrive = list[vertex][i];

            if (!visited[arrive] && list[vertex]) {
                visited[arrive] = true;
                queue.push(arrive);
            }
        }
    }
}

function createList(N) {
    const list = {};

    for (let i = 1; i <= N; i++) {
        list[i] = [];
    }

    return list;
}

function insertList(list, start, arrive) {
    list[start].push(arrive);
    list[arrive].push(start);
}
