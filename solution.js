function solution(N, M) {
    return;
}

// 입력
const inputs = [];
require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', line => {
        inputs.push(line.trim());
    })
    .on('close', () => {
        const [N, M] = inputs.shift().split(' ').map(Number);

        console.log(solution(N, M));
        process.exit();
    });
