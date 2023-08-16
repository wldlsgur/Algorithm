const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close" , () => {
    const K = Number(inputs.shift());

    for(let tc=0 ; tc<K ; tc++) {
        const [V, E] = inputs.shift().split(" ").map(Number);
        const graphInfo = inputs.splice(0, E).map(value => value.split(" ").map(Number));

        solution(V, E, graphInfo);
    }
})

function solution(V, E, graphInfo) {
    const visited = new Array(V + 1).fill(false); // 각 노드에 대해 방문 여부 
    const color = new Array(V + 1).fill("none"); // 각 노드에 대해 색깔을 미정으로 저장
    const list = {};

    // 리스트 초기화
    for(let i=1 ; i<=V ; i++) {
        list[i] = [];
    }
    // 리스트 정보 저장
    for(const [start, arrive] of graphInfo) {
        list[start].push(arrive);
        list[arrive].push(start);
    }
    // 이분 그래프인지 확인
    let flag = true;
    // 연결된 모든 그래프를 BFS 탐색
    for(let i=1 ; i<=V ; i++) {
        if(!visited[i]) {
            flag = bfs(color, visited, list, i);
        }
        if(!flag) {
            break;
        }
    }

    console.log(flag ? "YES" : "NO");
}

function bfs(color, visited, list, start) {
    const queue = [start];

    visited[start] = true;
    color[start] = "red"; // 연결된 첫 노드는 반드시 빨간색으로 시작

    while(queue.length > 0) {
        const node = queue.shift();
        const nextColor = color[node] === "red" ? "black" : "red"; // 현재 노드의 색깔의 반대 색깔이 연결된 노드에 와야한다.

        for(const nextNode of list[node]) {
            // 연결된 노드가 만약 현재 노드의 색깔과 같다면 이분 그래프가 될 수 없다.
            if(color[nextNode] === color[node]) {
                return false;
            }
            // 방문하지 않았다면
            if(!visited[nextNode]) {
                visited[nextNode] = true;
                color[nextNode] = nextColor; // 연결된 노드에 현재 노드의 반대 색깔을 넣어준다.
                queue.push(nextNode);
            }
        }
    }

    return true;
}