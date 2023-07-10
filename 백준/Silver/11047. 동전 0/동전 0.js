const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close" , () => {
  const [N, K] = inputs[0].split(" ").map(Number);
  const coin = inputs.slice(1, inputs.length).map(Number);

  solution(N, K, coin)
})

function solution(N, K, coin) {
  let result = 0;

  for(let i=coin.length-1 ; i>=0 ; i--) {
    if(coin[i] > K) continue;

    const count = Math.floor(K / coin[i]);

    result += count;
    K = K - (coin[i] * count); 
  }

  console.log(result);
}