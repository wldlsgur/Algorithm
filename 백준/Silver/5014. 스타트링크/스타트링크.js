const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', (input) => {
    inputs.push(input.trim());
}).on('close', () => {
    const [F, S, G, U, D] = inputs[0].split(' ').map(Number);

    solution(F, S, G, U, D);
});

function solution(F, S, G, U, D) {
    const result = bfs(F, S, G, U, D);

    console.log(result);
}

function bfs(F, S, G, U, D) {
    const visited = new Array(F + 1).fill(false);
    const queue = [{ currentFloor: S, moveCount: 0 }];

    visited[S] = true;

    while (queue.length > 0) {
        const { currentFloor, moveCount } = queue.shift();
        const nextUpFloor = currentFloor + U;
        const nextDouwnFloor = currentFloor - D;

        if (currentFloor === G) {
            return moveCount;
        }

        if (nextUpFloor <= F && !visited[nextUpFloor]) {
            queue.push({ currentFloor: nextUpFloor, moveCount: moveCount + 1 });
            visited[nextUpFloor] = true;
        }

        if (nextDouwnFloor > 0 && !visited[nextDouwnFloor]) {
            queue.push({ currentFloor: nextDouwnFloor, moveCount: moveCount + 1 });
            visited[nextDouwnFloor] = true;
        }
    }

    return 'use the stairs';
}
