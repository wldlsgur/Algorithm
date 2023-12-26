const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const paragraphs = inputs.slice(0, -1);

    solution(paragraphs);
});

function solution(paragraphs) {
    const result = [];

    paragraphs.forEach(paragraph => {
        const stack = [];
        let isCompare = true;

        [...paragraph].forEach(str => {
            if (!isCompare) {
                return;
            }

            if (str === '(' || str === '[') {
                stack.push(str);
            }

            if (str === ')') {
                if (stack[stack.length - 1] === '(') {
                    stack.pop();
                } else {
                    isCompare = false;
                    return;
                }
            }

            if (str == ']') {
                if (stack[stack.length - 1] == '[') {
                    stack.pop();
                } else {
                    isCompare = false;
                    return;
                }
            }
        });

        if (stack.length > 0 || !isCompare) {
            return result.push('no');
        }
        result.push('yes');
    });

    console.log(result.join('\n'));
}
