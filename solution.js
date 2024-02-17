const inputs = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const N = parseInt(inputs.shift(), 10);
    const K = parseInt(inputs.shift(), 10);
    const appleLocation = inputs
      .splice(0, K)
      .map((value) => value.split(' ').map(Number));
    const L = parseInt(inputs.shift(), 10);
    const snakeLocation = inputs.map((value) =>
      value.split(' ').map((value) => (!isNaN(value) ? Number(value) : value))
    );

    process.stdout.write(solution(N, K, appleLocation, L, snakeLocation));
    process.exit();
  });

function solution(N, K, appleLocation, L, snakeLocation) {
  console.log(arguments);
  const board = Array.from({ length: N }, () => new Array(N).fill(false));

  return 'hi';
}
