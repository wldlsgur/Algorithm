const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const T = Number(inputs.shift());

    for (let tc = 1; tc <= T; tc += 1) {
        const [N, M] = inputs.shift().split(' ').map(Number);
        const important = inputs.shift().split(' ').map(Number);

        solution(N, M, important);
    }
});

function solution(N, M, important) {
    const queue = important.map((value, index) => ({ value, index })); // 중요도와 원래 인덱스 저장
    let count = 0;

    while (queue.length > 0) {
        let current = queue.shift(); // 큐에서 문서를 하나 꺼냄

        if (queue.some(doc => doc.value > current.value)) {
            // 현재 문서보다 중요도가 높은 문서가 있는 경우
            queue.push(current); // 큐의 가장 뒤로 이동
        } else {
            // 현재 문서가 가장 중요도가 높은 경우
            count++;
            if (current.index === M) {
                // 출력하는 문서가 찾고자 하는 문서인 경우
                console.log(count);
                break;
            }
        }
    }
}
