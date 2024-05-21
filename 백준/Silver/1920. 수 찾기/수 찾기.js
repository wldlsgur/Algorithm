const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const N = inputs.shift();
    const NNumbers = inputs.shift().split(' ').map(Number);
    const M = inputs.shift();
    const MNumbers = inputs.shift().split(' ').map(Number);

    console.log(solution(N, M, NNumbers, MNumbers));
    process.exit();
  });

function solution(N, M, NNumbers, MNumbers) {
  const result = [];
  NNumbers.sort((a, b) => a - b);

  MNumbers.forEach(number => {
    result.push(binarySearch(NNumbers, number));
  });

  return result.join('\n');
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
