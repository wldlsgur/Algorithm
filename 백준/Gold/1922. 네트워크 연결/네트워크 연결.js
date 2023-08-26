const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const N = Number(inputs.shift());
    const M = Number(inputs.shift());
    const info = inputs.map(value => value.split(" ").map(Number));

    solution(N, M, info);
});

function solution(N, M, info) {
    const sortedCost = info.sort((a, b) => a[2] - b[2]);
    const parent = Array.from({ length : N + 1 }, (_, index) => index);

    let result = 0;
    for(const [start, arrive, cost] of sortedCost) {
        if(isSycle(parent, start, arrive)) {
            continue;
        }

        result += cost;
        union(parent, start, arrive);
    }
    console.log(result);
}

function findParent(parent, x) {
    if(parent[x] === x) return x;
    return findParent(parent, parent[x]);
}

function union(parent, x1, x2) {
    const parent1 = findParent(parent, x1);
    const parent2 = findParent(parent, x2);

    if(parent1 < parent2) {
        parent[parent2] = parent1;
    }
    else {
        parent[parent1] = parent2;
    }
}

function isSycle(parent, x1, x2) {
    const p1 = findParent(parent, x1);
    const p2 = findParent(parent, x2);

    return p1 === p2;
}
