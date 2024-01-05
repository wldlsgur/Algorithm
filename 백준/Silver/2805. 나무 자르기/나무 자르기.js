const rl = require('readline').createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on('line', input => {
    inputs.push(input.trim());
}).on('close', () => {
    const [N, M] = inputs.shift().split(' ').map(Number);
    const heights = inputs.shift().split(' ').map(Number);

    solution(N, M, heights);
});

function solution(N, M, heights) {
    heights.sort((a, b) => a - b);

    console.log(binarySearch(heights, M));
}

function binarySearch(array, target) {
    let left = 0;
    let right = array[array.length - 1];
    let result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let total = 0;

        array.forEach(number => {
            if (number > mid) {
                total += number - mid;
            }
        });

        if (total >= target) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}
