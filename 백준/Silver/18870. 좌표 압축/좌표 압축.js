const inputs = [];
require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', line => {
        inputs.push(line.trim());
    })
    .on('close', () => {
        const N = Number(inputs.shift());
        const arr = inputs.shift().split(' ').map(Number);

        console.log(solution(N, arr));
        process.exit();
    });

function solution(N, arr) {
    const uniqArr = [...new Set(arr)];
    const countObj = {};
    const result = [];

    uniqArr.sort((a, b) => a - b);
    uniqArr.forEach((value, index) => {
        if (!countObj[value]) {
            countObj[value] = 0;
        }

        countObj[value] = index;
    });
    arr.forEach(value => result.push(countObj[value]));

    return result.join(' ');
}
