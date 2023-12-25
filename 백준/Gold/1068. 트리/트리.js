const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];
let count = 0;

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const N = Number(inputs.shift());
    const parents = inputs.shift().split(' ').map(Number);
    const deleteTarget = Number(inputs.shift());

    solution(N, parents, deleteTarget);
});

function solution(N, parents, deleteTarget) {
    const graph = {};
    let startNode = -1;

    parents.forEach((parent, child) => {
        if (parent === -1) {
            startNode = child;
            return;
        }
        if (!graph[parent]) {
            graph[parent] = [];
        }
        graph[parent].push(child);
    });

    if (startNode === deleteTarget) {
        return console.log(count);
    }
    dfs(graph, startNode, deleteTarget);
    console.log(count);
}

function dfs(graph, currentNode, deleteTarget) {
    if (!graph[currentNode]) {
        return (count += 1);
    }

    graph[currentNode].forEach(nextNode => {
        if (nextNode === deleteTarget) {
            // 부모 노드 자식으로 삭제할 타겟 노드가 1개만 존재한다면 부모 노드는 리프노드가 된다.
            if (graph[currentNode].length === 1) {
                return (count += 1);
            }
            return;
        }
        dfs(graph, nextNode, deleteTarget);
    });

    return count;
}
