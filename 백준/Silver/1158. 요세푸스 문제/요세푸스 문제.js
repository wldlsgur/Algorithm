const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const [N, K] = inputs[0].split(' ').map(Number);

    solution(N, K);
});

function solution(N, K) {
    const queue = Array.from({ length: N }, (_, index) => index + 1);
    const result = [];

    let count = 1;
    while (queue.length > 0) {
        const number = queue.shift();

        if (count % K === 0) {
            result.push(number);
        } else {
            queue.push(number);
        }

        count += 1;
    }

    console.log(`<${result.join(', ')}>`);
}
