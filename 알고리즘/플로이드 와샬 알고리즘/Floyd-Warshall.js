const INF = Infinity;

const matrix = [
    [0, 4, INF, 6],
    [3, 0, 7, INF],
    [5, INF, 0, 4],
    [INF, INF, 2, 0],
];

for(let k=0; k<matrix.length ; k++) { // 경유할 노드
    for(let start=0 ; start<matrix.length ; start++) { // 출발 노드
        for(let arrive=0; arrive<matrix.length ; arrive++) { // 도착 노드
            matrix[start][arrive] = Math.min(matrix[start][k] + matrix[k][arrive], matrix[start][arrive]);
        }
    }
}

matrix.map(line => console.log(line));