const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const N = Number(inputs[0]);
  const [start, arrive] = inputs[1].split(" ").map(Number);
  const M = Number(inputs[2]);
  const relationships = inputs.slice(3).map(value => value.split(" ").map(Number));

  solution(N, [start, arrive], M, relationships);
})

function solution(N, [start, arrive], M, relationships) {
  const list = {}; // 친척 관계를 담을 리스트 

  // 리스트 사람 번호 기준으로 빈 배열로 초기화
  for(let i=1 ; i<=N ; i++) list[i] = [];

  // 관계 정보 토대로 리스트에 초기값 저장
  relationships.forEach((value, index) => {
    const [parent, child] = value;

    list[parent].push(child);
    list[child].push(parent);
  });

  console.log(bfs(list, N, start, arrive));
}

// 넓이 탐색으로 시작 번호에서 도착 번호까지 횟수를 구한다 (횟수 = 촌수)
function bfs(list, N, start, arrive) {
  const visited = new Array(N).fill(false);
  const queue = [[start, 0]];

  visited[start] = true;

  while(queue.length > 0) {
    const [node, count] = queue.shift();

    // 만약 구하고자하는 도착 번호가 같다면 횟수를 반환
    if(node === arrive) return count;

    for(let i=0 ; i<list[node].length ; i++) {
      const nextNode = list[node][i];

      if(!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push([nextNode, count + 1]);
      }
    }
  }

  // 도착 번호까지 가지 못하는 경우 -1을 반환
  return -1;
}