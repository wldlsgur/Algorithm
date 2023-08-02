const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const dolors = [25, 10, 5, 1];
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const T = Number(inputs[0]);

  for(let i=0; i<T ; i++) {
    const change = Number(inputs.splice(1, 1)[0]);

    solution(change);
  }
})

function solution(change) {
  const result = Array.from({length : 4}, () => 0);
  let doloredC = change;

  dolors.forEach((value, index) => {
    const count = Math.floor(doloredC / value);

    result[index] = count;
    doloredC -= value * count;
  })

  console.log(...result);
}