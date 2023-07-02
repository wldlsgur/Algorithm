const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

let graph;
let dfsResult = [];
let bfsResult = [];
let visitedDfs;
let visitedBfs;
let inputs = [];

rl.on("line", (input) => {
    inputs.push(input);

    if(inputs[0] && inputs.length === Number(inputs[0].split(" ")[1]) + 1){
        rl.close();
    }
}).on("close", () => {
    solution();    
});

function solution() {
    const [N, M, start] = inputs[0].split(" ").map((value) => Number(value)); // N:노드, M:간선, start:시작지점
    const graphInfo = inputs.slice(1);
    graph = initGraph(N);
    visitedDfs = new Array(N + 1).fill(false);
    visitedBfs = new Array(N + 1).fill(false);
    
    for(let i=0 ; i<graphInfo.length ; i++){
        const [x, y] = graphInfo[i].split(" ").map(value => Number(value));
        addNode(x, y);
    }

    for (let key in graph) {
        graph[key].sort((a, b) => Number(a) - Number(b));
    }

    dfs(start);
    console.log(...dfsResult);

    bfs(start);
    console.log(...bfsResult);
}

function initGraph(N) { // 그래프 리스트 초기화
    const graph = {};

    for (let i = 1; i <= N; i++) graph[i] = [];

    return graph;
}

function addNode(x, y) {
    graph[x].push(y);   
    graph[y].push(x);
}

function dfs(start) {
    visitedDfs[start] = true;
    dfsResult.push(start);

    for(let i=0 ; i<graph[start].length ; i++){
        const vertex = graph[start][i];

        if(!visitedDfs[vertex] && graph[vertex]){
            dfs(vertex);
        }
    }
}

function bfs(start) {
    let queue = [];

    queue.push(start);
    visitedBfs[start] = true;
    bfsResult.push(start);

    while(queue[0]){
        const vertex = queue.shift();

        for(let i=0 ; i<graph[vertex].length ; i++){
            if (!visitedBfs[graph[vertex][i]] && graph[vertex][i]) {
                visitedBfs[graph[vertex][i]] = true;
                bfsResult.push(graph[vertex][i]);
                queue.push(graph[vertex][i]);
            }
        }
    }
}