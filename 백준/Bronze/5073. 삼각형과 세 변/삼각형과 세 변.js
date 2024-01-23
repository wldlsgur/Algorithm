const inputs = [];
require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', line => {
        inputs.push(line.trim());
    })
    .on('close', () => {
        const lengths = inputs
            .map(value => value.split(' ').map(Number))
            .slice(0, -1);

        console.log(solution(lengths));
        process.exit();
    });

function solution(lengths) {
    const result = [];

    lengths.forEach(item => {
        const [a, b, c] = item;
        const max = Math.max(...item);
        const length = [...new Set(item)].length;

        if (2 * max >= a + b + c) {
            return result.push('Invalid');
        }

        if (length === 1) {
            result.push('Equilateral');
        }

        if (length === 2) {
            result.push('Isosceles');
        }

        if (length === 3) {
            result.push('Scalene');
        }
    });

    return result.join('\n');
}
