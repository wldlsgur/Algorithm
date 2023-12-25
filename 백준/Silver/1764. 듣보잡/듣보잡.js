const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const [N, M] = inputs.shift().split(' ').map(Number);
    const people1 = inputs.splice(0, N);
    const people2 = inputs.splice(0, M);

    solution(N, M, people1, people2);
});

function solution(N, M, people1, people2) {
    const result = [];
    const Nset = new Set(people1);
    const Mset = new Set(people2);

    Mset.forEach(people => {
        if (Nset.has(people)) {
            result.push(people);
        }
    });

    console.log(result.length + '\n' + result.sort().join('\n'));
}
