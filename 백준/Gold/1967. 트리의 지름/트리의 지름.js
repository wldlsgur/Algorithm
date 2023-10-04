const { type } = require('os');
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const N = Number(inputs.shift());
    const graphInfo = inputs.map(value => value.trim().split(" ").map(Number));

    solution(N, graphInfo);
})

function solution(N, graphInfo) {
    const list = {};

    for(let i=1; i<=N; i++) {
        list[i] = [];
    }

    for(const [start, arrive, cost] of graphInfo) {
        list[start].push([arrive, cost]);
        list[arrive].push([start, cost]);
    }

    const { node: maxNode1 } = bfs(N, list, 1);
    const { cost: maxCost2 } = bfs(N, list, maxNode1);

    console.log(maxCost2);
}

function bfs(N, list, startNode) {
    const visited = new Array(N + 1).fill(false);
    const queue = [[startNode, 0]];
    const max = { node : 0, cost : 0 };

    visited[startNode] = true;

    while(queue.length > 0) {
        const [currentNode, currentCost] = queue.shift();

        if(max.cost < currentCost) {
            max.node = currentNode;
            max.cost = currentCost;
        }

        if(!list[currentNode]) {
            continue;
        }
        
        for(const [nextNode, nextCost] of list[currentNode]) {
            if(!visited[nextNode]) {
                visited[nextNode] = true;
                queue.push([nextNode, currentCost + nextCost]);
            }
        }
    }

    return max;
}

// function dfs(max, visited, list, currNode, currCost) {
//     visited[currNode] = true;

//     if(max.cost < currCost) {
//         max.node = currNode;
//         max.cost = currCost;
//     }

//     for(const [nextNode, cost] of list[currNode]) {
//         if(!visited[nextNode]) {
//             dfs(max, visited, list, nextNode, currCost + cost);
//         }
//     }
// }