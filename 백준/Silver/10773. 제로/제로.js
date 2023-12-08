const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const K = Number(inputs.shift());
    const numbers = inputs.map(Number);

    solution(K, numbers);
});

function solution(K, numbers) {
    const stack = [];

    numbers.forEach(number => {
        if (number === 0) {
            return stack.pop();
        }
        stack.push(number);
    });

    console.log(
        stack.reduce((acc, cur, idx, src) => {
            return acc + cur;
        }, 0)
    );
}
