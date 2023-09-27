function solution(tickets) {
    const graph = {};

    // 그래프 초기값 삽입
    for(const [start, arrive] of tickets) {
        if(!graph[start]) {
            graph[start] = [];
        }
        if(!graph[arrive]) {
            graph[arrive] = [];
        }
        // 각 시작점 기준으로 다른 도착지에 대한 방문 여부를 확인해야한다.
        graph[start].push(arrive);
    }

    // 도착지들을 알파벳 역순으로 정렬
    for(const key in graph) {
        graph[key].sort((a, b) => a > b ? -1 : 1);
    }
    console.log(graph)
    return dfs(graph);
}

function dfs(graph) {
    const stack = ["ICN"];
    const result = [];

    while (stack.length > 0) {
        const currentNode = stack[stack.length - 1]; // Top 요소를 확인합니다.
        
        // 갈 수 있는 경로가 있다면
        if (graph[currentNode]?.length > 0) {
            // 갈 수 있는 경로 중 알파벳 순으로 앞선 것을 먼저 방문합니다.
            // 역순으로 정렬했기에 pop을 하면 알파벳 순입니다.
            stack.push(graph[currentNode].pop());
        } else { // 더 이상 갈 수 있는 경로가 없다면
            // 경로를 추가합니다.
            result.push(stack.pop());
        }
    }

    return result.reverse();
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]])); // ["ICN", "JFK", "HND", "IAD"]
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]])); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
console.log(solution([["ICN", "JFK"], ["ICN", "AAD"], ["JFK", "ICN"]])) // ["ICN", "JFK", "ICN", "AAD"]