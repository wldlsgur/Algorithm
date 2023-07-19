const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const alphabets = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const [R, C] = inputs[0].split(" ").map(Number); // R : 세로 C : 가로
  const matrix = inputs.slice(1, inputs.length).map((value) => value.split(""));

  solution(R, C, matrix);
});

function solution(R, C, matrix) {
  const visited = Array.from({ length: R }, () => new Array(C).fill(false));
  const result = dfs(matrix, visited, 0, 0, R, C, 1);

  console.log(result);
}

function dfs(matrix, visited, height, width, R, C, count) {
  let maxCount = count;

  visited[height][width] = true;
  alphabets.push(matrix[height][width]);

  for (let i = 0; i < 4; i++) {
    const newH = height + dy[i];
    const newW = width + dx[i];

    if (newH >= 0 && newH < R && newW >= 0 && newW < C && !visited[newH][newW] && !alphabets.includes(matrix[newH][newW])) {
        maxCount = Math.max(maxCount, dfs(matrix, visited, newH, newW, R, C, count + 1));
        
        alphabets.pop();
        visited[newH][newW] = false;
    }
  }
  return maxCount;
}
