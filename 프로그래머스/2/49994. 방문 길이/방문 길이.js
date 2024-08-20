function solution(dirs) {
  const move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  const now = [0, 0];
  const route = new Set();

  for (let dir of dirs) {
    let nextX = now[0] + move[dir][0];
    let nextY = now[1] + move[dir][1];

    if (nextX > 5 || nextX < -5 || nextY > 5 || nextY < -5) continue;

    route.add('' + now[0] + now[1] + nextX + nextY);
    route.add('' + nextX + nextY + now[0] + now[1]);

    now[0] = nextX;
    now[1] = nextY;
  }

  return route.size / 2;
}