const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const N = Number(inputs.shift());
    const NCard = inputs.shift().split(' ').map(Number);
    const M = Number(inputs.shift());
    const MCard = inputs.shift().split(' ').map(Number);

    solution(N, NCard, M, MCard);
});

function solution(N, NCard, M, MCard) {
    const result = [];

    const obj = NCard.reduce((acc, cur, inx) => {
        if (!acc[cur]) {
            acc[cur] = true;
        }
        return acc;
    }, {});

    MCard.forEach(number => {
        if (obj[number]) {
            return result.push(1);
        }

        result.push(0);
    });

    console.log(result.join(' '));
}
