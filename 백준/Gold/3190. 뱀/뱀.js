const inputs = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const N = parseInt(inputs.shift(), 10);
    const K = parseInt(inputs.shift(), 10);
    const appleLocation = inputs
      .splice(0, K)
      .map(value => value.split(' ').map(Number));
    const L = parseInt(inputs.shift(), 10);
    const snakeLocation = inputs.map(value =>
      value.split(' ').map(value => (!isNaN(value) ? Number(value) : value))
    );

    process.stdout.write(solution(N, K, appleLocation, L, snakeLocation));
    process.exit();
  });

function solution(N, K, appleLocation, L, snakeLocation) {
  const board = Array.from({ length: N }, () => new Array(N).fill(0));
  const direction = Array.from({ length: 10000 });
  const snake = [[0, 0]];
  const offset = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let currentDirection = 0;
  let time = 0;

  appleLocation.forEach(([x, y]) => (board[x - 1][y - 1] = 2));
  snakeLocation.forEach(([time, rotate]) => (direction[time] = rotate));

  while (true) {
    const [x, y] = snake[snake.length - 1];
    const [dx, dy] = offset[currentDirection];
    const newX = x + dx;
    const newY = y + dy;

    time += 1;

    // 종료 조건
    if (
      newX < 0 ||
      newX >= N ||
      newY < 0 ||
      newY >= N ||
      board[newX][newY] === 1
    ) {
      break;
    }

    // 사과가 없다면 꼬리를 비워준다.
    if (!board[newX][newY]) {
      const [x, y] = snake.shift();

      board[x][y] = 0;
    }

    // 다음 칸으로 이동
    snake.push([newX, newY]);
    board[newX][newY] = 1;

    // 회전 할 시간이라면
    if (direction[time]) {
      const rotate = direction[time];

      // 왼쪽 90도
      if (rotate === 'L') {
        currentDirection -= 1;

        if (currentDirection < 0) {
          currentDirection = 3;
        }
      }

      // 오른쪽 90도
      if (rotate === 'D') {
        currentDirection += 1;

        if (currentDirection > 3) {
          currentDirection = 0;
        }
      }
    }
  }

  return String(time);
}
