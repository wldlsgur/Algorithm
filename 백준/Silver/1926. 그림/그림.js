const inputs = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const [n, m] = inputs.shift().split(' ').map(Number);
    const g = inputs.map((value, index) =>
      value.split(' ').map((value2, index2) => {
        if (value2 === 1 && start[0] !== null && start[1] !== null) {
          start[0] = index;
          start[1] = index2;
        }

        return Number(value2);
      })
    );

    console.log(solution(n, m, g));
    process.exit();
  });

function solution(n, m, g) {
  const visited = Array.from({ length: n }, () => new Array(m).fill(false));
  const result = [0, 0];

  g.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col === 1 && !visited[rowIndex][colIndex]) {
        result[0] += 1;
        result[1] = Math.max(
          result[1],
          bfs(n, m, g, rowIndex, colIndex, visited)
        );
      }
    });
  });

  return result.join('\n');
}

function bfs(n, m, g, rowIndex, colIndex, visited) {
  const queue = [[rowIndex, colIndex]];
  let width = 1;

  visited[rowIndex][colIndex] = true;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i += 1) {
      const newX = dx[i] + x;
      const newY = dy[i] + y;

      if (newX >= n || newX < 0 || newY >= m || newY < 0) {
        continue;
      }

      if (g[newX][newY] === 1 && !visited[newX][newY]) {
        visited[newX][newY] = true;
        queue.push([newX, newY]);
        width += 1;
      }
    }
  }

  return width;
}
