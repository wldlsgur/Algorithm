const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const n = Number(inputs.shift());
    const nCard = inputs.shift().split(' ').map(Number);
    const m = Number(inputs.shift());
    const mCard = inputs.shift().split(' ').map(Number);

    solution(n, nCard, m, mCard);
});

function solution(n, nCard, m, mCard) {
    const countMap = nCard.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});

    const result = mCard.map(number => countMap[number] || 0);

    console.log(result.join(' '));
}
