const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const N = Number(inputs.shift());
    const graphInfo = inputs.map(value => value.split(" ").map(Number));
    
    solution(N, graphInfo);
})

function solution(N, graphInfo) {
    const list = {};
    let result = 0;

    for(const [start, arrive, cost] of graphInfo) {
        if(!list[start]) {
            list[start] = [];
        }
        if(!list[arrive]) {
            list[arrive] = [];
        }

        list[start].push([arrive, cost]);
        list[arrive].push([start, cost]);
    }

    let targetNode = 1;
    for(let i=0 ; i<2 ; i++) {
        const max = { node : 0, cost : 0 };
        const visited = new Array(N + 1).fill(false);

        dfs(max, visited, list, targetNode, 0);
        targetNode = max.node;
        result = max.cost;
    }
    
    console.log(result);
}

function dfs(max, visited, list, currNode, currCost) {
    visited[currNode] = true;

    if(max.cost < currCost) {
        max.node = currNode;
        max.cost = currCost;
    }

    for(const [nextNode, cost] of list[currNode]) {
        if(!visited[nextNode]) {
            dfs(max, visited, list, nextNode, currCost + cost);
        }
    }
}