
function solution(dirs) {
  const direction = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  const curruent = [0, 0];
  const route = new Set();

  for (const dir of dirs) {
    const nextX = curruent[0] + direction[dir][0];
    const nextY = curruent[1] + direction[dir][1];

    if (nextX > 5 || nextX < -5 || nextY > 5 || nextY < -5) {
      continue;
    }

    route.add(`${curruent[0]}${curruent[1]}${nextX}${nextY}`);
    route.add(`${nextX}${nextY}${curruent[0]}${curruent[1]}`);

    curruent[0] = nextX;
    curruent[1] = nextY;
  }

  return route.size / 2;
}
