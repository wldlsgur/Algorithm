function solution(maps) {
  const start = { x: 0, y: 0 };
  const n = maps.length;
  const m = maps[0].length;
  const end = { x: n - 1, y: m - 1 };

  return bfs(start, end, n, m, maps);
}

function bfs(start, end, n, m, maps) {
  const queue = [{ ...start, count: 1 }];
  const visited = Array.from({ length: n }, () => new Array(m).fill(false));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  visited[start.x][start.y] = true;

  while (queue.length > 0) {
    const { x: currentX, y: currentY, count: currentCount } = queue.shift();

    if (currentX === end.x && currentY === end.y) {
      return currentCount;
    }

    for (let i = 0; i < 4; i += 1) {
      const nextX = currentX + dx[i];
      const nextY = currentY + dy[i];

      if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) {
        continue;
      }

      if (maps[nextX][nextY] === 0 || visited[nextX][nextY]) {
        continue;
      }

      queue.push({ x: nextX, y: nextY, count: currentCount + 1 });
      visited[nextX][nextY] = true;
    }
  }

  return -1;
}
