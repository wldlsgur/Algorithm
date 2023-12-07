const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const N = Number(inputs.shift());
    const arrayA = inputs.shift().split(' ').map(Number);
    const M = Number(inputs.shift());
    const arrayB = inputs.shift().split(' ').map(Number);

    solution(N, M, arrayA, arrayB);
});

function solution(N, M, arrayA, arrayB) {
    const sortedArrayA = arrayA.sort((a, b) => a - b);
    const resultArray = [];

    arrayB.forEach(number =>
        resultArray.push(binarySearch(sortedArrayA, number))
    );
    console.log(resultArray.join('\n'));
}

function binarySearch(array, findValue) {
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (left <= right) {
        if (array[mid] === findValue) {
            return 1;
        }

        if (array[mid] < findValue) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        mid = Math.floor((left + right) / 2);
    }

    return 0;
}
