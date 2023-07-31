const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const N = inputs.splice(0, 1).map(Number)[0];
  const M = inputs.splice(0, 1).map(Number)[0];
  const busInfo = inputs.splice(0).map(value => value.split(" ").map(Number));

  solution(N, M, busInfo);
})

function solution(N, M, busInfo) {
  const matrix = Array.from({length : N}, () => new Array(N).fill(Infinity)); // 모든 도시 좌표를 무한대로 초기화

  for(let i=0 ; i<N ; i++) matrix[i][i] = 0; // 자기 자신은 거리 0

  busInfo.forEach((value, index) => {
    const [start, arrive, cost] = value; // [출발, 도착, 비용]

    matrix[start - 1][arrive - 1] = Math.min(matrix[start - 1][arrive - 1], cost); // 중복되는 버스가 있으니 더 작은 값으로 초기화
  });

  for(let k=0 ; k<N ; k++) { // 반드시 경유할 도시
    for(let i=0 ; i<N ; i++) { // 출발 도시
      for(let j=0 ; j<N ; j++) { // 도착 도시
        // 경유하는 방법, 바로 가는 방법 두 가지를 비교하여 더 싼 값을 선택
        matrix[i][j] = Math.min(matrix[i][k] + matrix[k][j], matrix[i][j]);
      }
    }
  }

  for(let i=0 ; i<N ; i++) {
    for(let j=0; j<N ; j++) {
      // 무한대 거리는 0으로 표시
      matrix[i][j] = matrix[i][j] === Infinity ? 0 : matrix[i][j];
    }
  }

  let result = "";

  matrix.map(value => {
    result += value.join(" ");
    result += `\n`;
  })

  console.log(result);
}