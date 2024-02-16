const inputs = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const [N, M] = inputs.shift().split(' ').map(Number);
    const numbers = inputs.shift().split(' ').map(Number);

    process.stdout.write(solution(N, M, numbers));
    process.exit();
  });

function solution(N, M, numbers) {
  let arr = Array.from({ length: N }, (_, index) => index + 1);
  let count = 0;

  numbers.forEach(number => {
    const centerIndex = Math.floor(arr.length / 2);
    const currentIndex = arr.indexOf(number);
    const first = arr[0];

    if (first === number) {
      return arr.shift();
    }

    if (currentIndex <= centerIndex) {
      for (let i = 0; i < currentIndex; i += 1) {
        arr.push(arr.shift());
        count += 1;
      }
      return arr.shift();
    }

    if (currentIndex > centerIndex) {
      for (let i = 0; i < arr.length - currentIndex; i += 1) {
        arr.unshift(arr.pop());
        count += 1;
      }
    }
    return arr.shift();
  });

  return String(count);
}
