const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const minits = [300, 60, 10];

rl.on("line" , (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const T = Number(inputs[0]);

  solution(T);
})

function solution(T) {
  const result = [];

  minits.forEach((value, index) => {
    const count = Math.floor(T / value);

    T -= count * value;
    result.push(count);
  })

  T === 0 ? console.log(...result) : console.log(-1);
}