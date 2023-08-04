const Vertex = 5;
const Matrix = [
  [0, 9, 75, 0, 0],
  [9, 0, 95, 0, 42],
  [75, 95, 0, 51, 66],
  [0, 0, 51, 0, 0],
  [0, 42, 66, 0, 0],
];

console.log(prim(0));

function prim(start) {
    const visited = new Array(Vertex).fill(false); // 노드 방문 처리 배열
    const select = []; // 선택할 수 있는 노드와 가중치를 저장
    let totalCost = 0; // 최소 가중치 합계

    visited[start] = true; // 시작 노드 방문 처리
    // 시작 노드 기준으로 연결된 노드와 가중치를 배열에 저장
    for(let i=0 ; i<Vertex ; i++) {
        if(Matrix[start][i]) {
            select.push([i, Matrix[start][i]]);
        }
    }

    // 배열이 빌 때까지 반복
    while(select.length > 0) {
        // 항상 최소 가중치를 가져오기 위해 오름차순으로 정렬
        select.sort((a, b) => a[1] - b[1]);
        const [vertex, weight] = select.shift(); // 최소 노드와 가중치를 가져오고 제거

        // 만약 이전에 방문했던 노드이면 생략
        if(visited[vertex]) continue;

        // 노드를 방문 처리 해주며
        visited[vertex] = true;
        // 가중치를 누적 저장 해준다.
        totalCost += weight;

        // 선택된 노드에서 또 연결되어 있고 방문하지 않은 노드와 가중치를 배열에 저장
        for (let i = 0; i < Vertex; i++) {
            if(Matrix[vertex][i] && !visited[i]) {
                select.push([i, Matrix[vertex][i]]);
            }
        }
    }
    return totalCost;
}

