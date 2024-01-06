const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const [N, M] = inputs.shift().split(' ').map(Number);
    const NArray = inputs.shift().split(' ').map(Number);
    const MArray = inputs.map(value => value.split(' ').map(Number));

    solution(N, M, NArray, MArray);
});

function solution(N, M, NArray, MArray) {
    const sumArray = new Array(N + 1).fill(0);
    const result = [];

    NArray.forEach(
        (number, index) => (sumArray[index + 1] = sumArray[index] + number)
    );

    MArray.forEach(([i, j]) => {
        result.push(sumArray[j] - sumArray[i - 1]);
    });
    
    console.log(result.join('\n'));
}
