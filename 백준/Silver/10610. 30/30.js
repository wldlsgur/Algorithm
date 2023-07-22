const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line" , (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  solution(inputs[0].split("").map(Number));
})

function solution(N) {
  // 0이 포함되어 있지 않다면 30의 배수가 될 수 없다.
  if(!N.includes(0)) return console.log(-1);

  const sum = N.reduce((acc, number) => acc + number);
  
  // 30의 배수는 마지막 자리수가 무조건 0이 와야한다 0을 빼고 생각해보자
  // 각 원소의 합이 3으로 나누어지면 3의 배수가 될 수 있어서 오름차순으로 정렬 후 합쳐준다.
  sum % 3 === 0 ? console.log(N.sort((a, b) => b - a).join("")) : console.log(-1);
}