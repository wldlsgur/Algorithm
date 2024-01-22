const inputs = [];
require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', line => {
        inputs.push(line.trim());
    })
    .on('close', () => {
        const [H, W, N, M] = inputs.shift().split(' ').map(Number);

        console.log(solution(H, W, N, M));
        process.exit();
    });

function solution(H, W, N, M) {
    const y = Math.ceil(H / (N + 1));
    const x = Math.ceil(W / (M + 1));

    return y * x;
}
