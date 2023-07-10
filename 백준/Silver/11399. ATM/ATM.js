const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
//const result = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close" , () => {
  const N = Number(inputs[0]);
  const Parray = inputs.slice(1, inputs.length)[0].split(" ").map(Number);

  solution(N, Parray);
})

function solution(N, Parray) {
  let stayTime = 0;
  let result = 0;

  Parray.sort((a, b) => a - b);

  Parray.forEach(element => {
    stayTime = stayTime + element;
    result += stayTime;
  });

  console.log(result);
}