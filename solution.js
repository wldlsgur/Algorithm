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
    const indegree = new Array(N + 1).fill(0);
    const list = {};

    for(let i=1 ; i<=N ; i++) {
        list[i] = [];
    }

    for(const [start, arrive] of info) {
        list[start].push(arrive);
        indegree[arrive]++;
    }

    topologtSort(N, list, buildTime, indegree);
}

function topologtSort(N, list, buildTime, indegree) {
    const queue = [];
    const result = new Array(N + 1).fill(0);

    for(let i=1 ; i<=indegree.length ; i++) {
        if(indegree[i] === 0) {
            queue.push(i);
        }
    }

    while(queue.length > 0) {
        const node = queue.shift();
        let maxTime = 0;

        result[maxT]

        // 큐에서 꺼낸 노드랑 연결된 노드를 탐색
        for(const nextNode of list[node]) {
            maxTime = Math.max(buildTime[nextNode], maxTime);
            indegree[nextNode]--; // 연결된 노드의 진입 차수를 삭제

            // 만약 연결된 노드의 진입차수를 삭제후 0이라면 큐에 삽입
            if(indegree[nextNode] === 0) {
                queue.push(nextNode);
            }
        }
    }

    return result;
}