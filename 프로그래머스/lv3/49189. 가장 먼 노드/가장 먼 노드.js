function solution(n, edge) {
    const list = {};

    for(let i=1; i<=n ; i++) {
        list[i] = [];
    }

    for(const [start, arrive] of edge) {
        list[start].push(arrive);
        list[arrive].push(start);
    }

    const [distance, maxCost] = bfs(n, list, 1);

    return distance.filter(value => value === maxCost).length;
}

function bfs(n, list, startNode) {
    const distance = new Array(n + 1).fill(0);
    const visited = new Array(n + 1).fill(false);
    const queue = [[startNode, 0]];

    visited[startNode] = true;

    let maxCost = 0;

    while(queue.length > 0) {
        const [currNode, cost] = queue.shift();

        distance[currNode] = cost;
        maxCost = Math.max(cost, maxCost);

        for(const nextNode of list[currNode]) {
            if(!visited[nextNode]) {
                visited[nextNode] = true;
                queue.push([nextNode, cost + 1]);
            }
        }
    }

    return [distance, maxCost];
}