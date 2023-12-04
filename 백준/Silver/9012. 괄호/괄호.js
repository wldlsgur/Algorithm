const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const T = parseInt(inputs.shift(), 10);

    for (let testCase = 1; testCase <= T; testCase += 1) {
        const str = inputs.shift();

        solution(str);
    }
});

function solution(str) {
    const stack = [];
    const spitedStr = str.split('');

    spitedStr.forEach(char => {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else if (char === ')' && stack[stack.length - 1] === ')') {
            stack.push(char);
        } else if (char === ')' && !stack[stack.length - 1]) {
            stack.push(char);
        }
    });

    console.log(stack.length === 0 ? 'YES' : 'NO');
}
