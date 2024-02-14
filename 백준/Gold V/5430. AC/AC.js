const inputs = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const T = parseInt(inputs.shift(), 10);

    for (let i = 1; i <= T; i += 1) {
      const P = inputs.shift();
      const N = parseInt(inputs.shift(), 10);
      const Arr = inputs.shift();

      process.stdout.write(solution(P, N, Arr));
    }

    process.exit();
  });

function solution(P, N, Arr) {
  Arr = Arr.replace(/\[/g, '');
  Arr = Arr.replace(/\]/g, '');

  const filterArr = Arr.split(',')
    .filter(item => item.trim() !== '')
    .map(Number);
  const filterP = P.split('');
  let head = 0;
  let tail = filterArr.length - 1;
  let isPop = false;
  let isError = false;

  filterP.forEach(command => {
    if (command === 'R') {
      isPop = !isPop;
    }

    if (command === 'D') {
      if (head > tail) {
        isError = true;
        return;
      }

      if (isPop) {
        tail -= 1;
      } else {
        head += 1;
      }
    }
  });

  if (isError) {
    return 'error\n';
  }

  const result = filterArr.slice(head, tail + 1);

  if (isPop) {
    result.reverse();
  }

  return `[${result.join(',')}]` + '\n';
}
