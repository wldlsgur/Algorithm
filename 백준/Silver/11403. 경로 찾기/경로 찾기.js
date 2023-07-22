const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line" , (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const N = Number(inputs[0]);
  const G = inputs.slice(1, inputs.length).map(value => value.split(" ").map(Number));

  solution(N, G);
})

function solution(N, G) {
  // 플로이드-와샬 알고리즘을 사용하여 최단 경로를 찾습니다.
  for (let k = 0; k < N; k++) { // 거쳐가는 노드
    for (let i = 0; i < N; i++) { // 출발 노드
      for (let j = 0; j < N; j++) { // 도착 노드
        if (G[i][k] === 1 && G[k][j] === 1) {
          //console.log("거쳐가는 노드 : ", k, "출발 : ", i, " 도착 : ", j);
          G[i][j] = 1;
        }
      }
    }
  }

  for (const row of G) {
    console.log(row.join(" "));
  }
}

/*function solution(N, G) {
  const Glist = {};

  // matrix 형태를 list 형태로 변경 합니다.
  for(let i=0 ; i<N ; i++) Glist[i] = []; 

  // list에 그래프 정보를 저장합니다.
  for(let i=0 ; i<G.length ; i++) {
    for(let j=0 ; j<G[i].length ; j++) {
      if(G[i][j] === 1) Glist[i].push(j);
    }
  }
  
  for(let i=0 ; i<N ; i++) {
    const print = [];
    for(let j=0; j<N ; j++) {
      const vistied = new Array(N).fill(false);

      print.push(dfs(i, j, Glist, vistied));
    }
    console.log(print);
  }
}

function dfs(start, arrive, Glist, vistied) {
  // 만약 시작 노드와 도착 노드가 같고 방문을 했다면 1을 반환합니다.
  if(start === arrive && vistied[start] === true) {
    return 1;
  }

  // start에 연결된 노드를 탐색 합니다.
  for(let i=0; i<Glist[start].length ; i++) {
    const nextNode = Glist[start][i]; // 연결된 다음 노드 입니다.

    // 다음 노드가 방문처리되지 않았다면 더 깊이 탐색합니다.
    if(!vistied[nextNode]) {
      vistied[nextNode] = true; // 연결된 다음 노드를 방문처리 해줍니다.

      // 연결된 다음 노드 dfs가 문제의 조건을 만족하여 1을 반환하면 남은 dfs 스택을 모두 종료합니다.
      if (dfs(nextNode, arrive, Glist, vistied) === 1) {
        return 1;
      }
      vistied[nextNode] = false; // 연결된 다음 노드를 방문처리를 되돌려 줍니다.
    }
  }
  // start에서 arrive 까지 도달하지 못했다면 0을 반환합니다.
  return 0;
} */