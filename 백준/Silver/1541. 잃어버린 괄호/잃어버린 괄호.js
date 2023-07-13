const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

let formula; 

rl.on("line", (input) => {
  formula = input.trim();
}).on("close", () => {
  solution(formula);
})

// -뒤에 오는 +를 모두 더하여 앞의 -를 연산해주면 문제 해결
function solution(formula) {
  const list = formula.split(/[-]/); // -기준으로 배열을 만든다
  let result = 0;

  // - 기준으로 만들어진 배열은 각 원소들을 + 기준으로 나누어 만들어진 배열에서 모든 원소의 합을 결과에서 빼준다.
  list.forEach((value, index) => {
    const sum = value.split("+").reduce((acc, value) => { return acc + Number(value); }, 0)

    if(index === 0) result = sum; // 만약 첫 원소라면 초기값을 설정해준다.
    else result -= sum;
  });

  console.log(result);
}