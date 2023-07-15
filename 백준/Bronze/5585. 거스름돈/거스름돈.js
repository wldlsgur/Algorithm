const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];
const changes = [500, 100, 50, 10, 5, 1];
const payMoney = 1000;

rl.on("line", (input) => {
  inputs.push(input.trim());

}).on("close", () => {
  const buyMoney = Number(inputs[0]);
 
  solution(buyMoney);
})

function solution(buyMoney) {
  let change = payMoney - buyMoney;
  let result = 0;

  changes.forEach((value, index) => {
    if(change >= value) {
      const count = Math.floor(change / value); 
      result += count;
      change -= count * value;
    }
  })

  console.log(result);
}