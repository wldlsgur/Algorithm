const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());

}).on("close", () => {
  const N = Number(inputs[0]);
  const A = inputs[1].split(" ").map(Number);
  const B = inputs[2].split(" ").map(Number);

  solution(N, A, B);
})

function solution(N, A, B) {
  let result = 0;
  A.sort((a, b) => { return a - b; })

  for(let i=0 ; i<N ; i++) {
    const minA = A[i];
    const maxB = Math.max(...B);
    const maxBIdex = B.indexOf(maxB);
    B.splice(maxBIdex, 1);

    result += minA * maxB;
  }

  console.log(result);
}