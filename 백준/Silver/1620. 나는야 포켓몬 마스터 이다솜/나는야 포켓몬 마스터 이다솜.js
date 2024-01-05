const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const [N, M] = inputs.shift().split(' ').map(Number);
    const poketmon = inputs.splice(0, N);
    const searchTarget = inputs.splice(0, M);

    solution(N, M, poketmon, searchTarget);
});

function solution(N, M, poketmon, searchTarget) {
    const result = [];
    const nameToNum = {};
    const numToName = {};

    poketmon.forEach((name, i) => {
        const num = i + 1;
        nameToNum[name] = num;
        numToName[num] = name;
    });

    searchTarget.forEach(target => {
        if (isNaN(target)) {
            // target이 숫자가 아니라면(즉, 이름이라면)
            result.push(nameToNum[target]);
        } else {
            // target이 숫자라면
            result.push(numToName[Number(target)]);
        }
    });

    console.log(result.join('\n'));
}
