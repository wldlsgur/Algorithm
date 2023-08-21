const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const N = Number(inputs.shift());
    const Numbers = inputs.shift().split(" ").map(Number);

    solution(N, Numbers);
})

function solution(N, Numbers) {
    const DP = new Array(N).fill(1);

    for(let i=1 ; i<Numbers.length ; i++) {
        let max = 0;

        for(let j=0; j<i ; j++) {
            if(Numbers[i] > Numbers[j]) {
                max = Math.max(DP[j], max);
            }
        }

        DP[i] = max + 1;
    }
    console.log(Math.max(...DP));
}   