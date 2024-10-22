const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const [N, M] = inputs.shift().split(' ').map(Number);
    const board = inputs.splice(0, N).map((row) => row.split(' ').map(Number));
    const locations = inputs.map((row) => row.split(' ').map(Number));

    process.stdout.write(solution(N, M, board, locations));
    process.exit();
  });

function solution(N, M, board, locations) {
  const array = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
  const result = [];

  for (let i = 1; i <= N; i += 1) {
    for (let j = 1; j <= N; j += 1) {
      array[i][j] = array[i][j - 1] + board[i - 1][j - 1];
    }
  }

  locations.forEach(([x1, y1, x2, y2]) => {
    let sum = 0;

    for (let i = x1; i <= x2; i += 1) {
      sum += array[i][y2] - array[i][y1 - 1];
    }

    result.push(sum);
  });

  return result.join('\n');
}
