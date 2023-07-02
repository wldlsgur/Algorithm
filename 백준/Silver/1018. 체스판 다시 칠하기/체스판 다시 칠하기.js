const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
const whiteFirstBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackFirstBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

let minCount = [];
let inputs = [];
rl.on("line", (input) => {
    inputs.push(input);

    if(inputs[0] && inputs.length === Number(inputs[0].split(" ")[0]) + 1){
        rl.close();
    }
}).on("close", () => {
   const [height, width] = [...inputs[0].split(" ").map((value) => Number(value))];
    const board = inputs.slice(1);

    const result = solution(width, height, board);
    printResult(result);
})

function solution(width, height, board) {
    for(let i=0 ; i<=height - 8 ; i++){ // 8만큼 가능한 높이 범위
        for(let j=0 ; j<=width - 8 ; j++){ // 8만큼 가능한 넓이 범위
            minCount.push(checkBalckFirst(i, j, board));
            minCount.push(checkWhiteFirst(i, j, board));
        }
    }
    return Math.min(...minCount);
}

function printResult(result) {
    console.log(result);
}

function checkBalckFirst(x, y, board) {
    let count = 0;
    for(let i=0 ; i<8 ; i++){
        for(let j=0 ; j<8 ; j++){
            if(blackFirstBoard[i][j] !== board[i + x][j + y]) count++;
        }
    }
    return count;
}

function checkWhiteFirst(x, y, board) {
    let count = 0;
    for (let i = 0 ; i < 8 ; i++) {
        for (let j = 0 ; j < 8 ; j++) {
            if (whiteFirstBoard[i][j] !== board[i + x][j + y]) count++;
        }
    }
    return count;
}