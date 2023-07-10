const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
//const result = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close" , () => {
  const N = Number(inputs[0]);

  solution(N);
})

function solution(N) {
  let count = 0;

  while(true) {
    if(N % 5 === 0) {
      console.log(count + N / 5);
      break;
    }

    if(N < 0) {
      console.log(-1);
      break;
    }

    count++;
    N = N -3;
  }
  //dfs(N, 0, 0);

  //if(result.length === 0) console.log(-1);
  //else console.log(Math.min(...result));
}

/*
function dfs(N, sum, count) {
  if(sum > N) return;
  if(sum === N) return result.push(count);

  dfs(N, sum + 5, count + 1);
  dfs(N, sum + 3, count + 1);
}
*/