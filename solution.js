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
    // 유니온 파인드 집합 배열 생성
    // 초기에는 자기 자신을 같은 집합으로 설정
    const parent = Array.from({ length: N + 1 }, (_, i) => i);
    let result = 0;

    // 각 파티 마다 사람들을 순회
    // 각 파티에 연결된 사람들은 하나의 집합으로 묶어준다.
    // 한 사람이 다른 파티에 있다면 다른 파티도 같이 한 집합으로 묶어줘야한다.
    // 비밀을 한 사람이 알면 그 전파되는 모든 파티사람들은 다 아니깐
    for (let i = 0; i < M; i++) {
        for (let j = 1; j < partyInfo[i].length; j++) {
            const a = partyInfo[i][j - 1];
            const b = partyInfo[i][j];

            union(parent, a, b);
        }
    }

    // 하나의 파티씩 순회
    partyLoop: for (let i = 0; i < M; i++) {
        // 파티에 한 사람씩 순회
        for (let j = 0; j < partyInfo[i].length; j++) {
            const people1 = partyInfo[i][j];

            // 진실을 알고있는 사람들 목록을 순회
            for (let z = 0; z < trueNumbers.length; z++) {
                const people2 = trueNumbers[z];

                // 진실을 알고있는 사람과 현재 파티에 참여중인 사람과 같은 집합이라면
                // 그 파티에서는 진실을 이야기할 수 없다.
                if (isCycle(parent, people1, people2)) {
                    continue partyLoop;
                }
            }
        }
        result += 1;
    }

    console.log(result);
}
