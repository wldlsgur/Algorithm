const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];


rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close" , () => {
  const S = Number(inputs[0]);

  solution(S);
});

function solution(S) {
  let sum = 0;
  let count = 0;
  let result = 0;

  while(true) {
    sum += ++count;
    result++;

    if(sum === S) break;
    if(sum > S) {
      result--;
      break;
    }
  }

  console.log(result);
}