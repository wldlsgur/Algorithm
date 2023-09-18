const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const testCase = Number(inputs.shift());

    for(let tc=0 ; tc<testCase ; tc++) {
        const [N, K] = inputs.shift().split(" ").map(Number);
        const buildTime = inputs.shift().split(" ").map(Number);
        const info = inputs.splice(0, K).map(value => value.split(" ").map(Number));
        const W = Number(inputs.shift());

        solution(N, K, W, buildTime, info);
    }
});

function solution(N, M, W, buildTime, info) {
    const indegree = new Array(N + 1).fill(0); // 차수 배열
    const list = {}; // 그래프 리스트

    // 그래프를 리스트 형식으로 표현
    for(let i=1 ; i<=N ; i++) {
        list[i] = [];
    }

    // 리스트에 값을 초기화하면서 각 노드 번호에 맞는 차수 갯수를 저장
    for(const [start, arrive] of info) {
        list[start].push(arrive);
        indegree[arrive]++;
    }

    // 위상 정렬 알고리즘을 통해 각 노드 마다 최대 건설 비용이 저장되는 DP를 반환
    const dp = topologtSort(N, list, buildTime, indegree);

    console.log(dp[W]);
}

function topologtSort(N, list, buildTime, indegree) {
    const queue = [];
    const dp = new Array(N + 1).fill(0);

    for(let i=1 ; i<=indegree.length ; i++) {
        if(indegree[i] === 0) {
            queue.push(i);
            dp[i] = buildTime[i - 1];
        }
    }

    while(queue.length > 0) {
        const node = queue.shift(); // 현재 차수가 0인 노드

        // 큐에서 꺼낸 노드랑 연결된 노드를 탐색
        for(const nextNode of list[node]) {
            // 연결된 다음 노드의 최대 비용은 (연결된 노드의 저장된 DP 최대 비용)과 (현재 노드의 DP 최대 비용 + 연결된 노드의 건설 비용) 중 더 큰 값이다.
            dp[nextNode] = Math.max(dp[nextNode], dp[node] + buildTime[nextNode - 1]); 
            indegree[nextNode]--; // 연결된 노드의 진입 차수를 삭제

            // 만약 연결된 노드의 진입차수를 삭제후 0이라면 큐에 삽입
            if(indegree[nextNode] === 0) {
                queue.push(nextNode);
            }
        }
    }

    return dp;
}