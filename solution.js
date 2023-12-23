const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

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
    let startNode;

    parents.forEach((parent, child) => {
        if (parent === -1) {
            startNode = child;
        } else {
            if (!graph[parent]) {
                graph[parent] = [];
            }
            graph[parent].push(child);
        }
    });

    deleteNode(startNode, deleteTarget, graph);
    console.log(countLeaf(startNode, graph));
}

function deleteNode(currentNode, deleteTarget, graph) {
    if (currentNode === deleteTarget) {
        removeNodes(currentNode, graph);

        for (const parent in graph) {
            graph[parent] = graph[parent].filter(
                child => child !== deleteTarget
            );
        }

        return;
    }

    if (graph[currentNode]) {
        for (const child of graph[currentNode]) {
            deleteNode(child, deleteTarget, graph);
        }
    }
}

function removeNodes(node, graph) {
    if (graph[node]) {
        for (const child of graph[node]) {
            removeNodes(child, graph);
        }
    }

    delete graph[node];
}

function countLeaf(node, graph) {
    let count = 0;

    // 자식이 없는 리프 노드 경우
    if (!graph[node]) {
        return 1;
    }

    for (const child of graph[node]) {
        count += countLeaf(child, graph);
    }

    return count;
}
