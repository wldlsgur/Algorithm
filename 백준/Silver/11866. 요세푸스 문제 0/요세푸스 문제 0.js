const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const [N, M] = inputs[0].split(' ').map(Number);

    solution(N, M);
});

function solution(N, M) {
    const queue = Array.from({ length: N }, (_, index) => index + 1);
    const result = [];
    let count = 0;

    while (queue.length > 0) {
        const number = queue.shift();

        if (++count % M === 0) {
            result.push(number);
            continue;
        }

        queue.push(number);
    }

    console.log(`<${result.join(', ')}>`);
}
