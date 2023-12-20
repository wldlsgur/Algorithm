const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];
const commands = ['D', 'S', 'L', 'R'];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const T = Number(inputs.shift());

    for (let testCase = 1; testCase <= T; testCase++) {
        const [A, B] = inputs.shift().split(' ').map(Number);

        solution(A, B);
    }
});

function solution(A, B) {
    const result = bfs(A, B);

    console.log(result);
}

function bfs(A, B) {
    const queue = [[A, '']];
    const visited = { [A]: true };

    while (queue.length !== 0) {
        const [number, count] = queue.shift();
        let nextNumber = count;

        if (number === B) {
            return count;
        }

        nextNumber = filterNumber(number * 2);
        if (!visited[nextNumber]) {
            queue.push([nextNumber, count + 'D']);
            visited[nextNumber] = true;
        }

        nextNumber = filterNumber(number - 1);
        if (!visited[nextNumber]) {
            queue.push([nextNumber, count + 'S']);
            visited[nextNumber] = true;
        }

        nextNumber = filterNumber(
            Math.floor(number % 1000) * 10 + Math.floor(number / 1000)
        );
        if (!visited[nextNumber]) {
            queue.push([nextNumber, count + 'L']);
            visited[nextNumber] = true;
        }

        nextNumber = filterNumber(
            Math.floor(number / 10) + (number % 10) * 1000
        );
        if (!visited[nextNumber]) {
            queue.push([nextNumber, count + 'R']);
            visited[nextNumber] = true;
        }
    }
}

function filterNumber(number) {
    if (number > 9999) {
        return number % 10000;
    } else if (number < 0) {
        return 9999;
    } else {
        return number;
    }
}
