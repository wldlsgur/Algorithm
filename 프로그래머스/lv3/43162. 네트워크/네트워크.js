function solution(n, computers) {
    const visited = new Array(n + 1).fill(false);
    const list = {};
    let result = 0;

    for(let i=1; i<=n ; i++) {
        list[i] = [];
    }

    for(let i=0 ; i<n ; i++) {
        for(let j=0; j<n ; j++) {
            const [start, arrive] = [i + 1, j + 1];
            const isConnected = computers[i][j];

            if(start !== arrive && isConnected) {
                list[start].push(arrive);
            }
        }
    }

    for(let i=1 ; i<=n ; i++) {
        const node = i;

        if(!visited[node]) {
            bfs(n, list, visited, node);
            result++;
        }
    }
    
    return result;
}

function bfs(n, list, visited, startNode) {
    const queue = [startNode];

    visited[startNode] = true;

    while(queue.length > 0) {
        const currentNode = queue.shift(0);

        for(const nextNode of list[currentNode]) {
            if(!visited[nextNode]) {
                visited[nextNode] = true;
                queue.push(nextNode);
            }
        }
    }
}

console.log(solution(3,	[[1, 1, 0], [1, 1, 0], [0, 0, 1]])); // 2