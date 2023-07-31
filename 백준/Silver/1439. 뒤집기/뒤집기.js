const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const S = inputs[0];

  solution(S);
})

function solution(S) {
  if(!S.includes("0") || !S.includes("1")) return console.log(0);

  const standardZero = S.split("0").filter(value => value !== "").length;
  const standardOne = S.split("1").filter(value => value !== "").length;

  console.log(standardOne > standardZero ? standardZero : standardOne);
}