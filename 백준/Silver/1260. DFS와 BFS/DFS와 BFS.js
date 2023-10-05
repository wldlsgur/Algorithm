const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const [N, M, V] = inputs.shift().split(" ").map(Number);
    const G = inputs.map(value => value.trim().split(" ").map(Number));

    solution(N, M, V, G);
})

function solution(N, M, V, G) {
    const list = {};
    const visited = new Array(N + 1).fill(false); // dfs 방문 배열
    const result = [[], []]; // [0] : dfs, 결과 [1] : bfs 결과 

    // 1 ~ N까지 인접 리스트 빈 배열 초기화
    for(let i=1; i<=N ; i++) {
        list[i] = [];
    }
    // 그래프 입력값으로 인접 리스트 양방향 그래프 값 삽입
    for(const [start, arrive] of G) {
        list[start].push(arrive);
        list[arrive].push(start);
    }
    // 경로가 2개 이상이면 작은 숫자부터 가기위한 오름차순 정렬
    for(let i=1; i<=N ; i++) {
        list[i].sort((a, b) => a - b);
    }

    dfs(list, visited, N, V, result);
    bfs(list, N, V, result);

    result.map(row => console.log(row.join(" ")));
}

function dfs(list, visited, N, start, result) {
    result[0].push(start);
    visited[start] = true;

    // 현재 출발지 노드에서 갈 수 있는 노드들을 방문
    for(const nextNode of list[start]) {
        // 방문하지 않은 노드들을 방문
        if(!visited[nextNode]) {
            dfs(list, visited, N, nextNode, result);
        }
    }
}

function bfs(list, N, start, result) {
    const queue = [start];
    const visited = new Array(N + 1).fill(false); // bfs 방문 배열

    visited[start] = true; // 현재 노드 방문 처리

    while(queue.length > 0) {
        const currNode = queue.shift(); // 큐에서 노드를 꺼내고

        result[1].push(currNode); // 큐에서 꺼낸 순서대로 결과를 삽입

        // 큐에서 꺼낸 현재 노드에서 갈 수 있는 노드들을 방문
        for(const nextNode of list[currNode]) {
            // 방문하지 않은 노드들만 방문
            if(!visited[nextNode]) {
                visited[nextNode] = true;
                queue.push(nextNode);
            }
        }
    }
}