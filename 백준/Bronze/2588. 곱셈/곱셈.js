const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
rl.on("line", (input) => {
  inputs.push(input);

  if (inputs.length === 2) {
    const result = calculation();
    printResult(result);
    rl.close();
  }
});

function calculation() {
  const [one, two] = [...inputs];
  const [tOne, tTwo, tThree] = [...two.split("")];
  let result = [];

  result.push(one * tThree);
  result.push(one * tTwo);
  result.push(one * tOne);
  result.push(result[0] + result[1] * 10 + result[2] * 100);

  return result;
}

function printResult(result) {
  result.map((value) => console.log(value));
}
