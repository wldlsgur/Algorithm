const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const [N, M] = inputs.shift().split(' ').map(Number);
    const [, ...trueNumbers] = inputs.shift().split(' ').map(Number); // 첫 번째 원소는 진실을 아는 사람의 수이므로 제외
    const partyInfo = inputs.map(value =>
        value.split(' ').slice(1).map(Number)
    ); // 각 파티의 첫 번째 원소는 해당 파티의 사람 수이므로 제외

    solution(N, M, trueNumbers, partyInfo);
});

function isCycle(parent, node1, node2) {
    const parent1 = findParent(parent, node1);
    const parent2 = findParent(parent, node2);

    return parent1 === parent2;
}

function findParent(parent, node) {
    if (parent[node] === node) return node;
    return findParent(parent, parent[node]);
}

function union(parent, node1, node2) {
    const parent1 = findParent(parent, node1);
    const parent2 = findParent(parent, node2);

    if (parent1 < parent2) parent[parent2] = parent1;
    else parent[parent1] = parent2;
}

function solution(N, M, trueNumbers, partyInfo) {
    const parent = Array.from({ length: N + 1 }, (_, i) => i);
    let result = 0;

    for (let i = 0; i < M; i++) {
        for (let j = 1; j < partyInfo[i].length; j++) {
            const a = partyInfo[i][j - 1];
            const b = partyInfo[i][j];

            union(parent, a, b);
        }
    }

    partyLoop: for (let i = 0; i < M; i++) {
        for (let j = 0; j < partyInfo[i].length; j++) {
            const people1 = partyInfo[i][j];

            for (let z = 0; z < trueNumbers.length; z++) {
                const people2 = trueNumbers[z];

                if (isCycle(parent, people1, people2)) {
                    continue partyLoop;
                }
            }
        }
        result += 1;
    }

    console.log(result);
}
