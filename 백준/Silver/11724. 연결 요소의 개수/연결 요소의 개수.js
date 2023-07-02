const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const inputs = [];
let visited;

rl.on("line", (input) => {
    inputs.push(input);
}).on("close", () => {
    const [N, M] = inputs[0].split(" ").map(Number);
    const grapInfo = inputs.slice(1, inputs.length).map((value) => {
        return value.split(" ").map(Number);
    });

    solution(N, M, grapInfo);
});

function solution(N, M, grapInfo) { // N : 정점 개수 , M : 간선 개수
    const list = createList(N);
    visited = new Array(N + 1);

    let result = 0;

    for(let i=0 ; i<M ; i++) {
        const start = grapInfo[i][0];
        const arrive = grapInfo[i][1];

        insertList(list, start, arrive);
    }

    for(let vertex in list) {
        if(!visited[vertex]) {
            result++;
            bfs(list, vertex);
        }
    }
    console.log(result);
}

function bfs(list, start) {
    const queue = [];

    queue.push(start);
    visited[start] = true;

    while(queue.length > 0) {
        const vertex = queue.shift();

        for(let i=0 ; i<list[vertex].length ; i++) {
            const arrive = list[vertex][i];

            if(!visited[arrive] && list[vertex]) {
                visited[arrive] = true;
                queue.push(arrive);
            }
        }
    }
}

function createList(N) {
    const list = {};

    for(let i=1 ; i<=N ; i++){
        list[i] = [];
    }

    return list;
}

function insertList(list, start, arrive) {
    list[start].push(arrive);
    list[arrive].push(start);
}