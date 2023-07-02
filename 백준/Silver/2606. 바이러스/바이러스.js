const rl = require("readline").createInterface(process.stdin, process.stdout);

let inputs = [];
let connection = [];
let graph = {};
let count = 0;

rl.on("line", (input) => {
    inputs.push(input);

    if(inputs[1] && Number(inputs[1]) === inputs.length - 2) {
        rl.close();
    }
}).on("close", () => {
    solution();
})

function solution() {
    const N = inputs[0];
    const M = inputs[1];
    connection = inputs.slice(2);

    makeGraph(N);
    addVertex(M);
    bfs(1, N);
    console.log(count);
}  

function makeGraph(N) {
    for(let i=1 ; i<=N ; i++){
        graph[i] = [];
    }
}

function addVertex(M) {
    for(let i=0 ; i<M ; i++){
        const [start, arrival] = connection[i].split(" ").map(value => Number(value));

        graph[start].push(arrival);
        graph[arrival].push(start);
    }
}

function bfs(start, N) {
    let visited = new Array(N).fill(false);
    let queue = [];

    queue.push(start);
    visited[start] = true;

    while(queue[0]){
        const vertex = queue.shift();

        for(let i=0 ; i<graph[vertex].length ; i++){
            const nextVertex = graph[vertex][i];

            if(!visited[nextVertex]){
                count++;
                visited[nextVertex] = true;
                queue.push(nextVertex);
            }
        }
    }
}