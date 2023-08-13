const N = 7
const graph = [[1, 2], [1, 5], [2, 3], [2, 6], [3, 4], [4, 7], [5, 6], [6, 4]];
const indegree = new Array(N + 1).fill(0); // 진입차수 배열
const list = {};
// list 초기화
for(let i=1 ; i<=N ; i++) {
    list[i] = [];
}
// list 초기화
for(const [start, arrive] of graph) {
    list[start].push(arrive);
    indegree[arrive]++;
}

console.log(...topologtSort(list, indegree));

// 위상 정렬 알고리즘
function topologtSort(list, indegree) {
    const queue = []; // 큐
    const result = []; // 위상정렬 결과 배열

    // 처음 차수가 0인 노드를 큐에 삽입
    for(let i=1 ; i<=indegree.length ; i++) {
        if(indegree[i] === 0) {
            queue.push(i);
        }
    }

    while(queue.length > 0) {
        const node = queue.shift();

        result.push(node); // 결과 배열에 넣는다.

        // 큐에서 꺼낸 노드랑 연결된 노드를 탐색
        for(const nextNode of list[node]) {
            indegree[nextNode]--; // 연결된 노드의 진입 차수를 삭제

            // 만약 연결된 노드의 진입차수를 삭제후 0이라면 큐에 삽입
            if(indegree[nextNode] === 0) {
                queue.push(nextNode);
            }
        }
    }

    return result;
}
